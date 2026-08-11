/*
  Asset pass: assets/plane_a340.glb -> public/models/a340.glb

  Run it when the source model changes. Its dependencies are deliberately not in
  package.json — they are build-time only, weigh more than the site, and are
  needed roughly never — so fetch them for the one invocation:

    npx --yes --package=@gltf-transform/core \
             --package=@gltf-transform/functions \
             --package=@gltf-transform/extensions \
             --package=meshoptimizer \
      node scripts/optimize-plane.mjs assets/plane_a340.glb public/models/a340.glb

  The committed output is 181KB. If a run produces something markedly larger,
  the simplify ratio below is the first thing to look at.


  The source is a 5.9MB Sketchfab OBJ conversion: 97k vertices, 162k triangles,
  uint32 indices, six JPEG liveries. Almost none of that survives contact with
  the brief. The aircraft renders at roughly 90px on screen and is finished as a
  single matte form in the brand palette, so the liveries and their UVs are dead
  weight, and the triangle budget is two orders of magnitude past what that
  silhouette can resolve.

  What we keep is the silhouette — which is the only thing doing any work at
  this size — and throw away everything else.
*/
import { NodeIO } from "@gltf-transform/core";
import { KHRMeshQuantization } from "@gltf-transform/extensions";
import {
  dedup,
  flatten,
  join,
  weld,
  simplify,
  prune,
  quantize,
} from "@gltf-transform/functions";
import { MeshoptSimplifier } from "meshoptimizer";
import fs from "node:fs";

const SRC = process.argv[2];
const DST = process.argv[3];

const io = new NodeIO().registerExtensions([KHRMeshQuantization]);
const doc = await io.read(SRC);

const stats = (label) => {
  let verts = 0;
  let tris = 0;
  for (const mesh of doc.getRoot().listMeshes()) {
    for (const prim of mesh.listPrimitives()) {
      verts += prim.getAttribute("POSITION")?.getCount() ?? 0;
      tris += (prim.getIndices()?.getCount() ?? 0) / 3;
    }
  }
  console.log(
    `${label.padEnd(22)} meshes=${doc.getRoot().listMeshes().length} verts=${verts} tris=${Math.round(tris)}`,
  );
};

stats("source");

/*
  Strip the liveries first. Clearing the texture slots before prune() means the
  images, samplers and their bufferViews all become unreachable and get
  collected; dropping TEXCOORD_0 afterwards removes the 8 bytes per vertex that
  only existed to address them.
*/
for (const material of doc.getRoot().listMaterials()) {
  material
    .setBaseColorTexture(null)
    .setNormalTexture(null)
    .setEmissiveTexture(null)
    .setOcclusionTexture(null)
    .setMetallicRoughnessTexture(null);
}
for (const mesh of doc.getRoot().listMeshes()) {
  for (const prim of mesh.listPrimitives()) {
    for (const name of prim.listSemantics()) {
      if (name.startsWith("TEXCOORD") || name.startsWith("COLOR")) {
        prim.setAttribute(name, null);
      }
    }
  }
}

/*
  Nine primitives across six materials become one. The material distinction was
  livery-only (wing_L / wing_R / tail all differed by texture, nothing else), and
  a single draw call is both cheaper and a precondition for simplify() reaching
  its target: a decimator cannot weld across primitive boundaries, so nine
  islands each keep their own seam vertices.
*/
await doc.transform(
  dedup(),
  flatten(),
  join({ keepNamed: false }),
  weld(),
);
stats("welded + joined");

/*
  ratio 0.08 with a 1% error bound. The aircraft is ~90px wide on screen; at
  that size the silhouette is carrying the read and interior topology is
  invisible, so the error budget can be generous. Verified below by triangle
  count and by eye in the browser.
*/
await doc.transform(
  simplify({ simplifier: MeshoptSimplifier, ratio: 0.08, error: 0.01 }),
  prune(),
  /* Positions to 14 bits, normals to 8. Well inside what a 90px silhouette can
     resolve, and it halves the vertex stride. */
  quantize({
    quantizePosition: 14,
    quantizeNormal: 8,
    quantizeTexcoord: 12,
  }),
);
stats("simplified");

await io.write(DST, doc);

const before = fs.statSync(SRC).size;
const after = fs.statSync(DST).size;
console.log(
  `\n${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024).toFixed(1)} KB  (${((1 - after / before) * 100).toFixed(1)}% smaller)`,
);
