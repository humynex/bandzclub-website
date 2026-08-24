/**
 * The B-star emblem, authored as clean vector so it stays sharp at any size
 * and can be extruded into real geometry by the WebGL hero.
 * Path data lives in EMBLEM_PATHS so both consumers share one source.
 */

export const EMBLEM_PATHS = {
  /** Heavy slab "B" with an open counter pair. */
  b: "M8 6 H30.5 C41 6 46.6 10.4 46.6 18.2 C46.6 23.4 43.8 26.9 38.6 28.4 C44.9 29.6 48.4 33.5 48.4 39.4 C48.4 47.8 42.2 52.6 31 52.6 H8 Z M19.2 15.2 V25 H28.4 C33 25 35.4 23.2 35.4 20 C35.4 16.9 33 15.2 28.4 15.2 Z M19.2 33.4 V43.4 H29.6 C34.4 43.4 37 41.5 37 38.3 C37 35.2 34.4 33.4 29.6 33.4 Z",
  /** Five-point star sitting on the B's shoulder. */
  star: "M62.4 4.2 L66.6 15.9 L79 16.4 L69.2 24 L72.6 36 L62.4 29 L52.2 36 L55.6 24 L45.8 16.4 L58.2 15.9 Z",
  /**
   * Heavy "C" cut to the same weight and cap height as the B, for the BC
   * lockup. Outer arc sweeps counter-clockwise over the top; the inner arc
   * returns clockwise to cut the counter.
   */
  c: "M88.4 15.9 A20 23.3 0 1 0 88.4 42.7 L81 36.9 A11 13.2 0 1 1 81 21.7 Z",
} as const;

export const EMBLEM_VIEWBOX = "0 0 82 58";
export const EMBLEM_BC_VIEWBOX = "0 0 118 58";

/** Shared chrome ramp. Distinct gradient id per variant to avoid id clashes. */
function ChromeRamp({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#ffffff" />
      <stop offset="16%" stopColor="#eef2f6" />
      <stop offset="33%" stopColor="#b3bbc3" />
      <stop offset="47%" stopColor="#5d646b" />
      <stop offset="49.5%" stopColor="#3d4248" />
      <stop offset="51%" stopColor="#d2dae1" />
      <stop offset="61%" stopColor="#ffffff" />
      <stop offset="76%" stopColor="#c2cad2" />
      <stop offset="90%" stopColor="#767d85" />
      <stop offset="100%" stopColor="#b8c0c8" />
    </linearGradient>
  );
}

/**
 * The BC★ lockup — the newer mark. Used for the footer signature and on case
 * studies; the compact B★ above stays the icon (nav, favicon, 3D hero).
 */
export function EmblemBC({
  className = "h-8 w-auto",
  title,
}: {
  className?: string;
  title?: string;
}) {
  const gid = "emblem-bc-chrome";
  return (
    <svg
      viewBox={EMBLEM_BC_VIEWBOX}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <ChromeRamp id={gid} />
      </defs>
      <g fill={`url(#${gid})`}>
        <path d={EMBLEM_PATHS.b} />
        <path d={EMBLEM_PATHS.c} />
        <path
          d={EMBLEM_PATHS.star}
          transform="translate(64.3 2.5) scale(0.62)"
        />
      </g>
    </svg>
  );
}

export function Emblem({
  className = "h-8 w-auto",
  title,
}: {
  className?: string;
  title?: string;
}) {
  const gid = "emblem-chrome";
  return (
    <svg
      viewBox={EMBLEM_VIEWBOX}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <ChromeRamp id={gid} />
      </defs>
      <g fill={`url(#${gid})`}>
        <path d={EMBLEM_PATHS.b} />
        <path d={EMBLEM_PATHS.star} />
      </g>
    </svg>
  );
}
