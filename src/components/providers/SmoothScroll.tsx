"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isSafari =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
      /iphone|ipad|ipod/i.test(navigator.userAgent);

    const lenis = new Lenis({
      lerp: isSafari ? 0.1 : 0.09,
      wheelMultiplier: 1,
      syncTouch: false,
      touchMultiplier: 1.6,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  // Real route changes must land at the top of the new page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
