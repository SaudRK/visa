"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navSections, siteConfig, siteEmail } from "@/lib/siteConfig";
import Wordmark from "./Wordmark";

/*
  The masthead.

  Reads as the head of a filed document rather than an app bar: serif wordmark,
  a mono filing line stating what this publication is, and the domains as
  rule-separated columns. It is translucent paper, so content passes under it
  instead of being cut off by an opaque strip, and the bottom rule only appears
  once the page has actually moved.

  `aria-current` is driven off the real pathname, so the chrome always tells you
  which of the seven domains you are inside — the "where am I" half of
  wayfinding that the previous header left unanswered.

  Beneath the domains runs the flight path: a dashed route with a waypoint under
  each section, and an aircraft parked at the section you are currently in.
  Point at another domain and it takes off, banks into the turn, and lands
  there, drawing the route it flew. It is the site's own metaphor — you are
  somewhere, you are considering going somewhere else, and there is a distance
  between the two — used as the navigation indicator instead of a sliding pill.
*/
export default function Header() {
  const [open, setOpen] = useState(false);
  const [reduced, setReduced] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ── Scroll behaviour ─────────────────────────────────────────────────
     Three separate responses at three depths, because they answer three
     different questions:

       scrolled  (>4px)    the page has moved, so the masthead earns its rule
                           and a more opaque paper
       condensed (>72px)   you are reading rather than arriving, so the bar
                           gives its height back to the document
       retracted (>200px,  you are reading *downward*; the bar leaves, and
       heading down)       comes back the moment you turn around

     The reading rule is deliberately not on that list: it is fixed to the
     viewport and never moves, so retracting cannot take it with it.

     Everything is driven off one rAF-throttled handler. The rule's width is
     written straight to the DOM through a ref — it needs a new value every
     frame, and re-rendering six nav links and an aircraft that often would be
     waste. The three booleans only flip at their thresholds, and React bails
     out on an unchanged value, so they cost one render per crossing. */
  const progressRef = useRef<HTMLSpanElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const [retracted, setRetracted] = useState(false);

  /* The scroll handler is installed once and would otherwise close over the
     first render's values, so the two states it has to respect are mirrored
     into refs. */
  const menuOpen = useRef(false);
  const noMotion = useRef(false);

  useEffect(() => {
    menuOpen.current = open;
  }, [open]);

  /* Un-retract on the press itself rather than in an effect watching `open`:
     the bar has just been interacted with, so it belongs on screen either way,
     and deriving it after the fact would only cost a second render. */
  const toggleMenu = () => {
    setRetracted(false);
    setOpen((v) => !v);
  };

  useEffect(() => {
    let frame = 0;
    let lastY = window.scrollY;

    const paint = () => {
      frame = 0;
      const y = window.scrollY;

      setScrolled(y > 4);
      setCondensed(y > 72);

      /* Retracting while the sheet is open would carry the close button off
         screen, and a bar that vanishes without travel is just a flicker — so
         under reduced motion it simply stays. The 6px deadband keeps trackpad
         jitter and scroll-anchoring nudges from toggling it. */
      if (menuOpen.current || noMotion.current || y < 200) {
        setRetracted(false);
      } else if (Math.abs(y - lastY) > 6) {
        setRetracted(y > lastY);
      }
      lastY = y;

      const bar = progressRef.current;
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    paint();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      noMotion.current = mq.matches;
      setReduced(mq.matches);
      if (mq.matches) setRetracted(false);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /** A domain is current when the path is inside it, not only equal to it. */
  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  /* ── Flight path ──────────────────────────────────────────────────────
     Every position below is measured, never guessed: the labels are real
     text in a variable-width face, so the waypoints have to be read off the
     laid-out DOM or the route lands beside the words instead of under them. */
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [waypoints, setWaypoints] = useState<number[]>([]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const measure = () => {
      const base = nav.getBoundingClientRect();
      // Below `lg` the nav is display:none — a rect of zeroes would park every
      // waypoint on top of the first one, so drop the chart instead.
      if (base.width === 0) {
        setWaypoints((current) => (current.length ? [] : current));
        return;
      }
      setWaypoints(
        linkRefs.current.map((el) => {
          if (!el) return 0;
          const box = el.getBoundingClientRect();
          return box.left - base.left + box.width / 2;
        }),
      );
    };

    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    for (const el of linkRefs.current) if (el) observer.observe(el);
    // Fallback faces are narrower than the real ones; re-measure once the
    // webfont swaps in, or the route sits a few pixels off for good.
    document.fonts?.ready.then(measure).catch(() => {});

    return () => observer.disconnect();
  }, []);

  const activeIndex = navSections.findIndex((item) => isCurrent(item.href));
  const [aim, setAim] = useState<number | null>(null);

  const measured = waypoints.length === navSections.length;
  const routeStart = measured ? waypoints[0] : 0;
  const routeEnd = measured ? waypoints[waypoints.length - 1] : 0;

  /* Where the aircraft rests with nothing pointed at: over the section you are
     in, or just off the left edge of the route when you are somewhere with no
     domain of its own — the home page, say — so its first flight is an
     arrival. */
  const inSection = measured && activeIndex >= 0;
  const home = inSection ? waypoints[activeIndex] : routeStart - 36;
  const x = measured && aim !== null ? waypoints[aim] : home;
  const flightVisible = measured && (aim !== null || inSection);

  /*
    The leg it has flown: from the section you are in to wherever the nose is
    now. Idle, that distance is zero and nothing is drawn.

    It only exists when there is a section to have departed from. On a page that
    belongs to no domain — the home page — anchoring the leg to the first
    waypoint instead drew a solid line clear across the bar whenever you pointed
    at something on the right, which read as a gap rather than a route. With no
    departure there is no leg: the aircraft simply flies in.
  */
  const trailFrom = inSection ? Math.min(waypoints[activeIndex], x) : x;
  const trailLength = inSection ? Math.abs(x - waypoints[activeIndex]) : 0;

  const previousX = useRef<number | null>(null);
  const [heading, setHeading] = useState(1);
  const [airborne, setAirborne] = useState(false);

  useEffect(() => {
    const previous = previousX.current;
    previousX.current = x;
    if (previous === null || Math.abs(x - previous) < 1 || reduced) return;

    setHeading(x > previous ? 1 : -1);
    setAirborne(true);
    // Matches --t-slow: the wheels touch down as the transition settles.
    const landing = window.setTimeout(() => setAirborne(false), 440);
    return () => window.clearTimeout(landing);
  }, [x, reduced]);

  return (
    <>
      {/*
        Reading rule — how far through the document you are.

        It lives outside <header> on purpose, and this is the whole reason it
        works. `.masthead` sets `backdrop-filter`, and sets `transform` while
        retracted; either property makes an element the containing block for
        `position: fixed` descendants. A rule nested inside the masthead is
        therefore fixed *to the masthead*, not to the viewport, and rides it off
        screen no matter what positioning it is given. Being a sibling, its
        containing block is the viewport, so it is pinned to the top of the
        screen and is simply unaffected by anything the masthead does.

        Kept above the masthead's z-index for the same reason: independence.
      */}
      <div className="scroll-progress" aria-hidden="true">
        <span ref={progressRef} className="scroll-progress-fill" />
      </div>

      {/*
        Utility strip. The reference puts opening hours and a phone number here;
        this product has neither, and inventing them would be a lie on every
        page. What it does have is three facts that are true site-wide and that a
        newcomer actually wants confirmed before reading — the scope, the price,
        and the fact that nothing is being sold — plus the one real contact route
        that exists in config.
      */}
      <div className="utility-bar hidden lg:block">
        <div className="page-wide flex h-[var(--utility-h)] items-center justify-between gap-6 text-[0.76rem]">
          <p className="flex items-center gap-5">
            <span>United States · federal and state</span>
            <span aria-hidden="true" className="text-white/25">
              /
            </span>
            <span>Free · no account required</span>
            <span aria-hidden="true" className="text-white/25">
              /
            </span>
            <span>{siteConfig.reviewCadence}</span>
          </p>
          <a
            href={`mailto:${siteEmail}`}
            className="font-medium text-white/80 transition-colors hover:text-white"
          >
            {siteEmail}
          </a>
        </div>
      </div>

      <header
        className="masthead"
        data-scrolled={scrolled}
        data-condensed={condensed}
        data-retracted={retracted}
      >
        <div className="masthead-row page-wide flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label={`${siteConfig.name} — home`}
            className="wordmark-link shrink-0 font-display text-[1.45rem] leading-none tracking-[-0.03em] text-ink"
          >
            <Wordmark accentClassName="wordmark-us text-accent" />
          </Link>

          {/* Domains, over their flight path. The hover indicator is the
              aircraft below the row, so the labels themselves only lift and
              take the accent — two competing highlights would read as noise. */}
          <nav
            ref={navRef}
            aria-label="Main"
            className="relative hidden items-center gap-0.5 lg:flex"
            onMouseLeave={() => setAim(null)}
          >
            {navSections.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                className="nav-link"
                aria-current={isCurrent(item.href) ? "page" : undefined}
                onMouseEnter={() => setAim(i)}
                onFocus={() => setAim(i)}
                onBlur={() => setAim(null)}
              >
                {item.label}
              </Link>
            ))}

            {measured ? (
              <span
                className="nav-flight"
                data-aiming={aim !== null ? "true" : undefined}
                aria-hidden="true"
              >
                <span
                  className="nav-route"
                  style={{
                    left: routeStart,
                    width: Math.max(routeEnd - routeStart, 0),
                  }}
                />
                <span
                  className="nav-route-flown"
                  style={{
                    transform: `translate3d(${trailFrom}px, 0, 0) scaleX(${Math.max(trailLength, 0.001)})`,
                    opacity: trailLength > 1 ? 1 : 0,
                  }}
                />
                {waypoints.map((point, i) => (
                  <span
                    key={navSections[i].href}
                    className="nav-waypoint"
                    data-lit={i === (aim ?? activeIndex) ? "true" : undefined}
                    style={{ left: point }}
                  />
                ))}
                <span
                  className="nav-plane"
                  data-airborne={airborne ? "true" : undefined}
                  data-heading={heading < 0 ? "left" : "right"}
                  style={{
                    transform: `translate3d(${x}px, ${airborne ? -7 : 0}px, 0)`,
                    opacity: flightVisible ? 1 : 0,
                  }}
                >
                  <svg
                    className="nav-plane-body"
                    viewBox="-23 -11.5 46 23"
                    style={{
                      transform: `rotate(${airborne ? heading * -10 : 0}deg) scale(${
                        heading * (airborne ? 1.12 : 1)
                      }, ${airborne ? 0.9 : 1})`,
                    }}
                  >
                    <path d="M22,0 L3,-2.4 L-3,-2.4 L-5,-11 L-8.5,-11 L-7,-2.4 L-15,-2.4 L-18,-7 L-20.5,-7 L-19,-2 L-21,0 L-19,2 L-20.5,7 L-18,7 L-15,2.4 L-7,2.4 L-8.5,11 L-5,11 L-3,2.4 L3,2.4 Z" />
                  </svg>
                </span>
              </span>
            ) : null}
          </nav>

          <div className="flex items-center gap-2.5">
          {/*
            The wrapper carries the responsive visibility, not the link. `.btn`
            sets `display: inline-flex` in this project's unlayered stylesheet,
            which outranks Tailwind's `hidden` utility — putting `hidden` on the
            button itself silently loses, and the button stays visible on mobile
            and pushes the whole masthead wider than the viewport.
          */}
            <div className="hidden lg:block">
              <Link href="/calculators" className="btn">
                Free calculators
              </Link>
            </div>

            <button
              type="button"
              className="menu-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
            >
              {/* Two rules that pivot into a cross, rather than two icons that
                  cut to each other — the shape you pressed stays the shape you
                  are looking at. */}
              <span className="menu-icon" data-open={open} aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>


        {/* Mobile sheet. Hung off `top-full` rather than the header-height
            token, because the bar condenses on scroll and the sheet has to
            follow its actual bottom edge, not its resting one. */}
        {open ? (
          <div
            id="mobile-nav"
            className="nav-sheet absolute inset-x-0 top-full border-b border-line bg-bg shadow-[var(--lift)] lg:hidden"
          >
            <nav aria-label="Mobile" className="page-wide index-list py-3">
              {navSections.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="index-row nav-sheet-row"
                  style={{ animationDelay: `${40 + i * 45}ms` }}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                >
                  <span className="index-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[1.15rem] leading-tight text-ink">
                    {item.label}
                  </span>
                  <svg
                    aria-hidden="true"
                    className="index-arrow h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              ))}
            </nav>
            <div
              className="page-wide nav-sheet-row pb-5"
              style={{ animationDelay: `${40 + navSections.length * 45}ms` }}
            >
              <Link
                href="/calculators"
                onClick={() => setOpen(false)}
                className="btn w-full"
              >
                Free calculators
              </Link>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
