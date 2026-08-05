/*
  Generates WebP tiles for the decorative money backgrounds.

  Why: the two source PNGs total ~1MB and are pulled in by CSS
  `background-image` on the homepage. They are purely decorative, and the CSS
  renders them far smaller than their intrinsic size (300px and 440px tall), so
  almost all of that payload was wasted bytes competing with the LCP element for
  bandwidth on mobile.

  The tiles are resized to 2x their rendered height (crisp on retina) and
  re-encoded as WebP with alpha preserved. globals.css references the WebP via
  `image-set()` and keeps the original PNG as the fallback declaration, so
  nothing disappears on a browser that does not support either.

  The original PNGs are intentionally kept: components/FloatingMoney.tsx uses
  them as the source for next/image, which derives its own optimised sizes.

  Run with: node scripts/optimize-decorative-images.js
  (sharp ships with Next.js — this adds no dependency.)
*/

const path = require("node:path");
const fs = require("node:fs");
const sharp = require("sharp");

const PUBLIC_DIR = path.join(__dirname, "..", "public");

// renderedHeight comes from `background-size: auto Npx` in globals.css.
const TILES = [
  { file: "falling-money1.png", renderedHeight: 300 },
  { file: "falling-money.png", renderedHeight: 440 },
];

async function main() {
  for (const { file, renderedHeight } of TILES) {
    const source = path.join(PUBLIC_DIR, file);
    const target = source.replace(/\.png$/, ".webp");

    const before = fs.statSync(source).size;
    await sharp(source)
      .resize({ height: renderedHeight * 2, withoutEnlargement: true })
      .webp({ quality: 78, alphaQuality: 90, effort: 6 })
      .toFile(target);
    const after = fs.statSync(target).size;

    const saved = (((before - after) / before) * 100).toFixed(1);
    console.log(
      `${file} → ${path.basename(target)}  ` +
        `${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB ` +
        `(-${saved}%)`
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
