/*
  The 3D half of the approach plate.

  This module is only ever reached through a dynamic import from
  ApproachPlate.tsx, so three.js and the model stay out of the main bundle and
  off the critical path entirely. Nothing here runs on the server.

  It is deliberately plain three.js rather than react-three-fiber: the scene is
  one mesh on one curve with no interaction and no React state, so a renderer
  reconciler would be several times the size of the thing it was reconciling.
*/
import type { Object3D, WebGLRenderer, Scene, PerspectiveCamera } from "three";
import { ROUTE } from "@/lib/flightPath";

export type Approach = {
  /** Drive the aircraft to a scroll progress in 0..1. */
  setProgress: (progress: number) => void;
  /** Release the context, geometry, materials and listeners. */
  dispose: () => void;
};

/*
  Brand palette, duplicated as numbers because three needs them at construction
  and reading custom properties off the document for a value that never changes
  would be ceremony. These are --color-accent, --color-navy and --color-bg.
*/
const EVERGREEN = 0x1f4d3a;
const PAPER = 0xfbfaf7;

/** Camera distance from the flight plane; the route's `depth` is relative to it. */
const CAMERA_Z = 12;
const FOV = 34;

/**
 * How large the aircraft is, in world units of wingspan. Small on purpose: the
 * brief asks for a small plane, and at this size the silhouette is the whole
 * read — which is also why the model could be decimated to 8% of its triangles
 * without any visible loss.
 */
const WINGSPAN = 0.62;

export async function createApproach(
  canvas: HTMLCanvasElement,
): Promise<Approach> {
  const THREE = await import("three");
  const { GLTFLoader } = await import(
    "three/examples/jsm/loaders/GLTFLoader.js"
  );

  const renderer: WebGLRenderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setClearAlpha(0);

  const scene: Scene = new THREE.Scene();
  const camera: PerspectiveCamera = new THREE.PerspectiveCamera(
    FOV,
    1,
    0.1,
    100,
  );
  camera.position.set(0, 0, CAMERA_Z);
  camera.lookAt(0, 0, 0);

  /*
    Three lights, no environment map. A key from the upper right so the wing
    that banks toward the reader catches it, a cool fill from below tinted with
    the page's own paper colour so the underside never goes to black, and a low
    ambient to keep the whole form legible against a light background.

    An HDRI would look better on a metallic finish, but the finish here is matte
    and the payload is the point: this is three lights and no download.
  */
  scene.add(new THREE.AmbientLight(0xffffff, 1.15));
  const key = new THREE.DirectionalLight(0xffffff, 2.1);
  key.position.set(4, 6, 5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(PAPER, 0.9);
  fill.position.set(-3, -4, 2);
  scene.add(fill);

  /*
    Matte, single colour, no texture. The source model's photoreal liveries were
    stripped in the asset pass: at ~90px they resolve to noise, and a
    photographic airliner on a ruled editorial page is exactly the "stock 3D
    asset" read we are trying to avoid. A solid evergreen form reads as a plate
    in a field guide, which is what the rest of the page is.
  */
  const material = new THREE.MeshStandardMaterial({
    color: EVERGREEN,
    roughness: 0.62,
    metalness: 0.05,
    transparent: true,
    opacity: 0.9,
  });

  /*
    Two nested groups, because position and attitude are computed from different
    things and must not fight:

      craft  — carries the flight: position on the curve, and the orientation
               derived from its tangent
      model  — carries the fixed correction from model space to three's
               convention. The GLB's nose is +X; three treats -Z as forward, so
               a quarter turn about Y aligns them. Bank is applied to `craft`
               about its own forward axis, which is only meaningful once this
               correction is in place.
  */
  const craft = new THREE.Group();
  const model = new THREE.Group();
  model.rotation.y = Math.PI / 2;
  craft.add(model);
  scene.add(craft);
  craft.visible = false;

  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync("/models/a340.glb");

  const aircraft: Object3D = gltf.scene;
  aircraft.traverse((child) => {
    const mesh = child as unknown as { isMesh?: boolean; material?: unknown };
    if (mesh.isMesh) mesh.material = material;
  });

  /*
    Normalise the model rather than trusting its authoring units. The source is
    an OBJ conversion measured in some unstated unit with its origin ~342 units
    behind the centroid, so it is recentred on its own bounding box and scaled
    by wingspan. Reading the box means a different model could be dropped in
    without retuning any of the numbers above.
  */
  const box = new THREE.Box3().setFromObject(aircraft);
  const centre = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const span = Math.max(size.x, size.y, size.z);
  aircraft.position.sub(centre);

  const holder = new THREE.Group();
  holder.add(aircraft);
  holder.scale.setScalar(WINGSPAN / span);
  model.add(holder);

  /* ── The route ────────────────────────────────────────────────────────
     Authored in viewport fractions, projected here onto world space at the
     visitor's actual aspect ratio, and rebuilt on resize. Doing it this way
     round means the composition holds at any window shape: the aircraft is
     always in the same *place in the frame* at a given scroll position, which
     is what was designed, rather than at the same world coordinate. */
  let curve = new THREE.CatmullRomCurve3([new THREE.Vector3()]);

  const project = (x: number, y: number, depth: number) => {
    const distance = CAMERA_Z - depth;
    const halfHeight = Math.tan((FOV * Math.PI) / 360) * distance;
    const halfWidth = halfHeight * camera.aspect;
    return new THREE.Vector3(
      (x - 0.5) * 2 * halfWidth,
      (0.5 - y) * 2 * halfHeight,
      depth,
    );
  };

  const rebuild = () => {
    curve = new THREE.CatmullRomCurve3(
      ROUTE.map((w) => project(w.x, w.y, w.depth)),
      false,
      "catmullrom",
      0.5,
    );
  };

  const resize = () => {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    /* Capped at 1.5: this is a small matte object with no fine detail, and a
       3x buffer on a retina display would quadruple the fill cost to render
       exactly the same silhouette. */
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    rebuild();
  };
  resize();

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);

  /* ── Attitude ─────────────────────────────────────────────────────────
     Position comes from the curve; orientation comes from its tangent, so the
     nose always points along the direction of travel. Bank is derived from how
     fast the heading is changing — a real aircraft rolls into a turn and the
     roll is proportional to the turn rate, so sampling the tangent slightly
     ahead and behind gives the banking for free and makes the base turn read
     as a turn rather than a slide. */
  /*
    How much of the route's vertical gradient reaches the nose.

    Pointing the aircraft straight down its own flight path is the obvious
    reading and it looks wrong: the route descends steeply in screen terms, so
    the nose ended up 40-50° down and the model read as a dart rather than as an
    airliner. A real aircraft on approach holds a shallow attitude and descends
    almost flat relative to its own axis — the flight path angle is about 3°, not
    45°. Damping the vertical component to a fifth puts the nose within a few
    degrees of level while the aircraft still visibly loses height.
  */
  const PITCH_DAMPING = 0.2;

  const position = new THREE.Vector3();
  const ahead = new THREE.Vector3();
  const behind = new THREE.Vector3();
  const heading = new THREE.Vector3();
  const target = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  const basis = new THREE.Matrix4();
  const facing = new THREE.Quaternion();
  const roll = new THREE.Quaternion();
  const forward = new THREE.Vector3(0, 0, -1);

  const setProgress = (progress: number) => {
    const t = Math.min(Math.max(progress, 0), 1);

    curve.getPointAt(t, position);
    craft.position.copy(position);

    /* Sample either side for the heading change. The clamp keeps the window
       inside the curve at both ends, where getTangentAt would otherwise fold
       back on itself and flip the aircraft. */
    const window_ = 0.02;
    curve.getPointAt(Math.min(t + window_, 1), ahead);
    curve.getPointAt(Math.max(t - window_, 0), behind);

    /* Nose along the direction of travel, with the vertical component damped so
       the aircraft descends without pointing at the ground. */
    heading.copy(ahead).sub(behind);
    heading.y *= PITCH_DAMPING;
    target.copy(position).add(heading);
    basis.lookAt(position, target, up);
    facing.setFromRotationMatrix(basis);

    /* Bank from the turn rate — the change in screen-space heading across the
       window. Measured on the *undamped* route, because the turn is real even
       though the pitch is not; capped at 32°, beyond which an airliner reads as
       aerobatic rather than as something on an approach. */
    const headingAhead = Math.atan2(ahead.y - position.y, ahead.x - position.x);
    const headingBehind = Math.atan2(
      position.y - behind.y,
      position.x - behind.x,
    );
    let delta = headingAhead - headingBehind;
    while (delta > Math.PI) delta -= Math.PI * 2;
    while (delta < -Math.PI) delta += Math.PI * 2;
    const bank = Math.max(Math.min(delta * 7, 0.56), -0.56);

    roll.setFromAxisAngle(forward, bank);
    craft.quaternion.copy(facing).multiply(roll);

    craft.visible = true;
    renderer.render(scene, camera);
  };

  return {
    setProgress,
    dispose: () => {
      observer.disconnect();
      material.dispose();
      aircraft.traverse((child) => {
        const mesh = child as unknown as {
          isMesh?: boolean;
          geometry?: { dispose: () => void };
        };
        if (mesh.isMesh) mesh.geometry?.dispose();
      });
      renderer.dispose();
    },
  };
}
