import type { ReactNode } from "react";

/**
 * Chrome curtain route transition. `template.tsx` remounts on every real
 * navigation, so this replays per route while the URL genuinely changes and
 * back/forward keep working.
 *
 * Deliberately CSS rather than Framer Motion: the page content must never be
 * gated behind a JavaScript animation completing. A JS-driven `opacity: 0`
 * start state renders to a blank page if the script fails, is disabled, or is
 * throttled. A CSS keyframe with `both` fill needs no JS at all, and the
 * reduced-motion rule in globals.css collapses it to an instant cut.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="page-curtain" aria-hidden="true">
        <span className="page-curtain__streak" />
      </div>
      <div className="page-enter">{children}</div>
    </>
  );
}
