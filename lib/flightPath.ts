/*
  ─────────────────────────────────────────────────────────────────────────────
  THE APPROACH PLATE

  An approach plate is the chart a pilot follows to descend and land at a
  specific airport: a route, numbered waypoints, an altitude at each one, and a
  heading between them. It is a real aviation artifact, it is ruled and
  annotated exactly like the rest of this publication, and it describes the one
  thing the whole site is about — arriving in the United States.

  So the homepage's scroll is a single approach. The reader begins at cruise and
  ends on the ground, and the six legs below are pinned to the six turns the
  page actually makes. This is the part that has to earn its place: an earlier
  scroll-driven airplane was removed from this page for being decorative (see
  the note in app/page.tsx), and a moving object that does not encode anything
  deserves that. This one encodes progress through the journey the site is
  written for, and it resolves on the word the brand is named after.

  Nothing here imports three.js. The path is authored in *screen* terms —
  fractions of the viewport — because that is the space the composition lives
  in; the scene module projects those onto a curve in world space at whatever
  aspect ratio the visitor actually has.
  ─────────────────────────────────────────────────────────────────────────────
*/

/** A point on the route, in viewport fractions plus a depth cue. */
export type Waypoint = {
  /** Scroll progress, 0 at the top of the document, 1 at the bottom. */
  at: number;
  /** 0 = left edge, 1 = right edge. */
  x: number;
  /** 0 = top edge, 1 = bottom edge. */
  y: number;
  /**
   * Distance from the camera in world units, negative being further away.
   * Cruise sits back in the frame and touchdown comes forward, so the aircraft
   * grows as it arrives without ever getting large.
   */
  depth: number;
};

/*
  The route. Right to left to right — a long descending left-hand arc onto
  final, then a level roll-out.

  It is shaped by the page as much as by the flight, and two constraints from the
  real layout set its limits:

  Cruise sits in the upper right, clear of the hero portrait. The descent crosses
  over the two tinted bands, where the aircraft reads as being in cloud rather
  than as an object loose over body copy.

  Then the ceiling. The route stays in the upper half of the frame and bottoms
  out at 0.46, which looks timid written down and is not: the colophon is an
  opaque navy block roughly half the viewport tall, and an earlier version of
  this route descended to 0.86 and put touchdown — the one moment the whole
  thing is built around — completely behind it. The corridor above the colophon
  is where the aircraft can actually be seen arriving, so that corridor is the
  runway. Depth carries what altitude no longer can: the aircraft comes forward
  from -3.2 to nearly the camera plane, so it grows as it arrives.
*/
export const ROUTE: Waypoint[] = [
  { at: 0.0, x: 0.84, y: 0.12, depth: -3.2 },
  { at: 0.2, x: 0.6, y: 0.2, depth: -2.7 },
  /* Left of centre, not through it: the section heads on this page are centred
     and occupy roughly 0.45–0.70 of the width at this height, and the crossing
     originally passed straight under one. */
  { at: 0.4, x: 0.3, y: 0.3, depth: -2.1 },
  { at: 0.58, x: 0.17, y: 0.34, depth: -1.5 },
  { at: 0.74, x: 0.13, y: 0.4, depth: -1.0 },
  { at: 0.9, x: 0.38, y: 0.44, depth: -0.5 },
  { at: 1.0, x: 0.62, y: 0.46, depth: -0.2 },
];

/**
 * A leg of the approach, and what the reader is passing through while flying
 * it. The `until` values line up with the homepage's own turns — cruise across
 * the hero, top of descent over the orientation section, and so on — so the
 * readout changes at the same moments the page does.
 */
export type Leg = {
  until: number;
  /** Shown in the readout. Aviation register, but plain enough to parse. */
  phase: string;
  /** Altitude in feet. Flight levels above the transition altitude. */
  altitude: number;
};

/*
  The last leg ends at exactly 1, not past it. `legAt` uses a strict `<`, so a
  leg ending at 1.01 would leave the reader three-quarters of the way through
  "Settled" at the bottom of the page and the altitude stuck at 75ft — the
  arrival never landing. Ending on 1 lets the final interpolation complete and
  the readout resolve to "Ground".
*/
export const LEGS: Leg[] = [
  { until: 0.17, phase: "Cruise", altitude: 35000 },
  { until: 0.34, phase: "Top of descent", altitude: 24000 },
  { until: 0.52, phase: "Descent", altitude: 13000 },
  { until: 0.7, phase: "Base turn", altitude: 6000 },
  { until: 0.86, phase: "Final approach", altitude: 2100 },
  { until: 0.96, phase: "Threshold", altitude: 300 },
  { until: 1, phase: "Settled", altitude: 0 },
];

/** The leg being flown at a given scroll progress. */
export function legAt(progress: number): Leg {
  return LEGS.find((leg) => progress < leg.until) ?? LEGS[LEGS.length - 1];
}

/**
 * The altitude readout for a progress value, interpolated between legs so the
 * number counts down continuously instead of stepping.
 *
 * Above 18,000ft it is written as a flight level — `FL350` — which is how
 * altitude is actually notated up there, and below it in plain feet. The last
 * leg reads `GROUND`, because a number there would be noise: the interesting
 * fact is that the journey is over.
 */
export function readout(progress: number): { phase: string; altitude: string } {
  const leg = legAt(progress);
  const index = LEGS.indexOf(leg);
  const previous = index > 0 ? LEGS[index - 1] : null;

  const from = previous ? previous.until : 0;
  const span = leg.until - from;
  const within = span > 0 ? Math.min(Math.max((progress - from) / span, 0), 1) : 1;

  const start = previous ? previous.altitude : LEGS[0].altitude;
  const feet = Math.round(start + (leg.altitude - start) * within);

  /* Under ten feet the wheels are down. The threshold is not zero because the
     scroll never lands on exactly 1.0 — a fractional document height leaves the
     last frame at 0.9999, and "1 ft" is a worse readout than "Ground". */
  if (feet < 10) return { phase: leg.phase, altitude: "Ground" };
  if (feet >= 18000) {
    return { phase: leg.phase, altitude: `FL${Math.round(feet / 1000) * 10}` };
  }
  return { phase: leg.phase, altitude: `${feet.toLocaleString("en-US")} ft` };
}
