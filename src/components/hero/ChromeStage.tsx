"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { Emblem } from "@/components/Emblem";

const ChromeEmblem3D = dynamic(() => import("./ChromeEmblem3D"), {
  ssr: false,
  loading: () => null,
});

type Mode = "pending" | "full" | "lean" | "still" | "flat";

function detect(): Mode {
  if (typeof window === "undefined") return "pending";
  try {
    const c = document.createElement("canvas");
    if (!(c.getContext("webgl2") ?? c.getContext("webgl"))) return "flat";
  } catch {
    return "flat";
  }
  if (window.innerWidth < 420) return "flat";
  // Reduced motion objects to the movement, not the material — hold the
  // chrome still rather than dropping to a flat mark.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return "still";
  const lean =
    window.innerWidth < 900 ||
    (navigator.hardwareConcurrency ?? 8) <= 4 ||
    window.devicePixelRatio > 2.5;
  return lean ? "lean" : "full";
}

/**
 * The vector emblem is always painted as the base layer and the WebGL scene
 * sits on top, fading the vector out only once it has genuinely rendered a
 * frame. That means there is no blank state to fall into — if the GPU, the
 * bundle, or (as in some embedded webviews) ResizeObserver never comes
 * through, the visitor still sees the mark.
 */
export function ChromeStage() {
  const [mode, setMode] = useState<Mode>("pending");
  const [painted, setPainted] = useState(false);
  const [paused, setPaused] = useState(false);
  const shell = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMode(detect());
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setMode(detect());
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Stop the render loop when the hero is off-screen, and when the tab is
  // hidden. Both are pure waste otherwise.
  useEffect(() => {
    const el = shell.current;
    if (!el) return;

    let offScreen = false;
    const sync = () => setPaused(offScreen || document.hidden);

    const io = new IntersectionObserver(
      ([entry]) => {
        offScreen = !entry.isIntersecting;
        sync();
      },
      { rootMargin: "120px" },
    );
    io.observe(el);
    document.addEventListener("visibilitychange", sync);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  const onPainted = useCallback(() => setPainted(true), []);
  const use3D = mode !== "pending" && mode !== "flat";

  return (
    <div ref={shell} className="relative h-full w-full">
      <div
        className="absolute inset-0 grid place-items-center transition-opacity duration-700"
        style={{ opacity: painted ? 0 : 1 }}
        aria-hidden={painted}
      >
        <Emblem
          className="w-[62%] max-w-[380px] drop-shadow-[0_22px_44px_rgba(0,0,0,0.85)]"
          title="Bandzclub"
        />
      </div>

      {use3D && (
        <div className="absolute inset-0">
          <ChromeEmblem3D
            lean={mode === "lean" || mode === "still"}
            still={mode === "still"}
            paused={paused}
            onPainted={onPainted}
          />
        </div>
      )}
    </div>
  );
}
