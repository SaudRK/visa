import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

/*
  Site-wide Open Graph / social card, generated at build time by next/og.

  This is a root-segment metadata file, so it applies to every route that does
  not declare its own opengraph-image — which means one branded card covers the
  whole site and there is no 404'ing /og-image.png to maintain.

  Fonts are deliberately left to the renderer's default sans rather than loading
  a webfont binary: it keeps the build fast and dependency-free, and the card is
  typographically simple enough that the difference does not read as an error.
*/

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Design tokens mirrored from globals.css so the card matches the site.
const PAPER = "#f4f1e9";
const INK = "#1e211c";
const EVERGREEN = "#2c6350";
const MUTED = "#6e6a5e";
const LINE = "#ded8c9";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Masthead */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: `2px solid ${LINE}`,
            paddingBottom: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: INK }}>
            <span>Settlein</span>
            <span style={{ color: EVERGREEN }}>US</span>
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            {siteConfig.domain}
          </div>
        </div>

        {/* Thesis */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Satori requires an explicit display on any element with more than
              one child, so each headline line is its own flex row. */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              lineHeight: 1.12,
              fontWeight: 700,
              color: INK,
              letterSpacing: -2,
            }}
          >
            <div style={{ display: "flex" }}>Your practical guide to</div>
            <div style={{ display: "flex", gap: 20 }}>
              <span>settling in the</span>
              <span style={{ color: EVERGREEN }}>United States</span>
            </div>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              lineHeight: 1.45,
              color: MUTED,
              maxWidth: 880,
            }}
          >
            Visa guides, tax explainers, and free calculators — no sign-up.
          </div>
        </div>

        {/* Footer rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            borderTop: `2px solid ${LINE}`,
            paddingTop: 26,
            fontSize: 22,
            color: MUTED,
          }}
        >
          <span style={{ color: EVERGREEN, fontWeight: 700 }}>H-1B</span>
          <span>·</span>
          <span style={{ color: EVERGREEN, fontWeight: 700 }}>F-1</span>
          <span>·</span>
          <span style={{ color: EVERGREEN, fontWeight: 700 }}>L-1</span>
          <span>·</span>
          <span>Green card</span>
          <span>·</span>
          <span>Taxes &amp; banking</span>
        </div>
      </div>
    ),
    size
  );
}
