"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  Canvas,
  useFrame,
  useThree,
  type ThreeElements,
} from "@react-three/fiber";
import { Environment, Lightformer, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { EMBLEM_PATHS, EMBLEM_VIEWBOX } from "@/components/Emblem";

const svgFor = (d: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${EMBLEM_VIEWBOX}"><path d="${d}"/></svg>`;

const EXTRUDE = {
  depth: 15,
  bevelEnabled: true,
  bevelThickness: 1.5,
  bevelSize: 1.15,
  bevelOffset: 0,
  bevelSegments: 5,
  curveSegments: 14,
} as const;

function extrude(d: string) {
  const { paths } = new SVGLoader().parse(svgFor(d));
  const shapes = paths.flatMap((p) => SVGLoader.createShapes(p));
  const geo = new THREE.ExtrudeGeometry(shapes, EXTRUDE);
  // SVG's Y axis points down; flip, then centre on the origin.
  geo.scale(0.1, -0.1, 0.1);
  geo.center();
  geo.computeVertexNormals();
  return geo;
}

/**
 * B and star are extruded separately.
 *
 * In the flat logo the star overlaps the B's shoulder, which is fine on paper
 * — but extruded at the same depth the two solids interpenetrate and you see
 * the star buried inside the B. Keeping them as separate meshes lets the star
 * sit forward in Z and orbit slightly, which is what reads as a badge pinned
 * to the mark rather than a smudge on it.
 */
function useEmblemGeometry() {
  return useMemo(
    () => ({
      b: extrude(EMBLEM_PATHS.b),
      star: extrude(EMBLEM_PATHS.star),
    }),
    [],
  );
}

// Polished chrome reflects its surroundings, so brightness comes from the
// environment far more than from `color`. A near-white base plus a strong
// envMapIntensity is what makes it read as silver rather than dark grey.
const chrome = new THREE.MeshStandardMaterial({
  color: "#eef2f6",
  metalness: 1,
  roughness: 0.045,
  envMapIntensity: 1.45,
});

const chromeDim = new THREE.MeshStandardMaterial({
  color: "#8b939c",
  metalness: 1,
  roughness: 0.16,
  envMapIntensity: 1.1,
});

/** Self-lit red bars. Emissive so they glow in the dark rather than waiting
 *  on a light to hit them — these are the neon lines, not metal. */
const signalBar = new THREE.MeshStandardMaterial({
  color: "#3a0805",
  emissive: new THREE.Color("#e10600"),
  emissiveIntensity: 2.4,
  metalness: 0.4,
  roughness: 0.4,
});

/**
 * Pointer, tracked on `window` rather than through R3F.
 *
 * The canvas sits under `pointer-events: none` so it can never swallow a click
 * meant for the hero CTA — but that also means R3F's own `state.pointer` never
 * updates and stays pinned at 0,0. Reading the window directly gives the mark
 * something to lean toward wherever the cursor is on the page, which is what
 * sells it as an object in a room rather than a looping video.
 */
const pointer = { x: 0, y: 0 };

function usePointerTracking() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}

/** Camera drifts against the pointer. Parallax is the strongest depth cue we
 *  have — without it a rotating object still reads as a flat sprite. */
function CameraRig({ still }: { still: boolean }) {
  const camera = useThree((s) => s.camera);
  useFrame((_, delta) => {
    if (still) return;
    const k = 1 - Math.pow(0.004, delta);
    camera.position.x += (pointer.x * 1.6 - camera.position.x) * k;
    camera.position.y += (pointer.y * 1.1 - camera.position.y) * k;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Emblem3D({ still }: { still: boolean }) {
  const geo = useEmblemGeometry();
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const lean = useRef({ x: 0, y: 0 });
  const spin = useRef(0);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g || still) return;

    // Continuous spin on Y. The pointer leans the mark toward the cursor and
    // tilts it, but never fights the rotation — that stays constant so the
    // highlights sweep across the metal the whole time.
    spin.current += delta * 0.62;

    target.current.y = pointer.x * 0.3;
    target.current.x = -pointer.y * 0.22;

    const k = 1 - Math.pow(0.0015, delta); // frame-rate independent damping
    lean.current.y += (target.current.y - lean.current.y) * k;
    lean.current.x += (target.current.x - lean.current.x) * k;

    // A permanent tilt on X and Z. Without it the spin passes through a
    // dead-on frame every rotation where only the flat front face is visible,
    // and at that instant the mark is indistinguishable from the 2D SVG.
    // Holding it at a three-quarter attitude means a side wall and the
    // bevel are always in view, so it never stops reading as a solid.
    g.rotation.y = spin.current + lean.current.y;
    g.rotation.x =
      0.19 + lean.current.x + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    g.rotation.z = -0.07 + Math.sin(state.clock.elapsedTime * 0.34) * 0.03;
    g.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
  });

  return (
    <group ref={group} rotation={still ? [0.06, -0.34, 0] : [0, 0, 0]} scale={1.3}>
      <mesh geometry={geo.b} material={chrome} position={[-0.9, 0, 0]} />
      {/* Forward in Z and up on the shoulder, so it never buries itself in
          the B's counter no matter where the spin is. */}
      <mesh
        geometry={geo.star}
        material={chrome}
        position={[3.1, 1.5, 1.4]}
        scale={0.62}
      />
    </group>
  );
}

/** Slow chrome bars drifting behind the emblem — they catch the strip lights. */
function Bars() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * 0.05;
  });
  const bars: ThreeElements["mesh"][] = useMemo(
    () =>
      [
        { position: [-5.4, 2.2, -6] as const, rotation: [0, 0, 0.5] as const, scale: [7, 0.16, 0.16] as const },
        { position: [5.8, -2.6, -7] as const, rotation: [0, 0, -0.34] as const, scale: [9, 0.13, 0.13] as const },
        { position: [1.4, 4.4, -9] as const, rotation: [0, 0, 0.18] as const, scale: [12, 0.1, 0.1] as const },
        // Deeper, longer bars fill the void behind the mark so the background
        // has structure to catch the strip lights instead of reading as flat.
        { position: [-3.2, -4.6, -11] as const, rotation: [0, 0, 0.62] as const, scale: [14, 0.09, 0.09] as const },
        { position: [6.6, 3.4, -12] as const, rotation: [0, 0, -0.2] as const, scale: [11, 0.08, 0.08] as const },
        { position: [-7, 0.4, -9.5] as const, rotation: [0, 0, -0.52] as const, scale: [8, 0.11, 0.11] as const },
      ] as unknown as ThreeElements["mesh"][],
    [],
  );
  const redBars: ThreeElements["mesh"][] = useMemo(
    () =>
      [
        { position: [-1.8, -5.4, -8] as const, rotation: [0, 0, 0.26] as const, scale: [10, 0.07, 0.07] as const },
        { position: [4.4, 5.6, -10.5] as const, rotation: [0, 0, -0.44] as const, scale: [7, 0.06, 0.06] as const },
      ] as unknown as ThreeElements["mesh"][],
    [],
  );
  return (
    <group ref={ref}>
      {bars.map((b, i) => (
        // eslint-disable-next-line react/jsx-key
        <mesh key={i} {...b} material={chromeDim}>
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      ))}
      {redBars.map((b, i) => (
        // eslint-disable-next-line react/jsx-key
        <mesh key={`r${i}`} {...b} material={signalBar}>
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      ))}
    </group>
  );
}

/**
 * A static environment built from Lightformer rectangles — not a downloaded
 * HDRI. The hard-edged strips are exactly what produce the bar highlights
 * that read as polished studio chrome. Because the env is static and the
 * emblem rotates, the reflections crawl for free.
 */
function StudioEnvironment({ lean }: { lean: boolean }) {
  return (
    <Environment resolution={lean ? 128 : 256}>
      {/*
        Chrome has no colour of its own — it is a mirror, so it looks like
        whatever surrounds it. A uniform mid-grey room therefore produces a
        uniform mid-grey object that reads as painted cardboard, which is
        exactly what this was doing.
        What makes metal look like metal is CONTRAST: big bright panels with
        dark gaps between them, so the surface picks up hard light/dark bands
        that slide as it turns. Hence a near-black room with large, very
        bright softboxes above and below.
      */}
      <color attach="background" args={["#08090b"]} />

      {/* Overhead softbox — the main thing the top faces see. */}
      <Lightformer
        form="rect"
        intensity={5.5}
        position={[0, 11, 2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[26, 18, 1]}
        target={[0, 0, 0]}
      />
      {/* Floor bounce — stops the underside going dead black. */}
      <Lightformer
        form="rect"
        intensity={2.6}
        position={[0, -10, 1]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[24, 16, 1]}
        target={[0, 0, 0]}
      />
      {/*
        Bounce cards BEHIND the camera. Without these the faces pointing at
        the viewer mirror empty black space and the mark reads as a silhouette.
        Two panels with a dark gap down the middle rather than one wide one —
        the gap is what gives the face a bright/dark break instead of a flat
        wash, and that break is what the eye reads as polish.
      */}
      <Lightformer
        form="rect"
        intensity={3.2}
        position={[-9, 2.5, 12]}
        scale={[12, 15, 1]}
        target={[0, 0, 0]}
      />
      <Lightformer
        form="rect"
        intensity={1.8}
        position={[9.5, -1.5, 12]}
        scale={[10, 13, 1]}
        target={[0, 0, 0]}
      />

      {/* key softbox */}
      <Lightformer
        form="rect"
        intensity={7}
        position={[-6, 5, 8]}
        scale={[11, 6, 1]}
        target={[0, 0, 0]}
      />
      {/* hard strips — the signature highlight bars. Placed front and back so
          the spin never turns a dead face toward the camera. */}
      <Lightformer
        form="rect"
        intensity={14}
        position={[5, 2.5, 6]}
        scale={[0.7, 14, 1]}
        target={[0, 0, 0]}
      />
      <Lightformer
        form="rect"
        intensity={12}
        position={[-6.5, 1, -6]}
        scale={[0.6, 14, 1]}
        target={[0, 0, 0]}
      />
      <Lightformer
        form="rect"
        intensity={9}
        position={[-4.5, -5, 5]}
        scale={[14, 0.6, 1]}
        target={[0, 0, 0]}
      />
      <Lightformer
        form="rect"
        intensity={8}
        position={[4, 6, -5]}
        scale={[14, 0.6, 1]}
        target={[0, 0, 0]}
      />
      {/* rim from behind, keeps the silhouette off the void */}
      <Lightformer
        form="circle"
        intensity={4.5}
        position={[0, 3, -9]}
        scale={9}
        target={[0, 0, 0]}
      />
      {/* Red rim, low and to the left — the same light that rims the founder
          in every Bandzclub graphic. Chrome picks it up as a coloured edge as
          it turns, which is what ties the hero to the rest of the palette. */}
      <Lightformer
        form="rect"
        intensity={6}
        color="#ff2a1c"
        position={[-7, -4, 2]}
        scale={[0.8, 12, 1]}
        target={[0, 0, 0]}
      />
      <Lightformer
        form="circle"
        intensity={3.2}
        color="#e10600"
        position={[3, -6, -5]}
        scale={7}
        target={[0, 0, 0]}
      />
      {!lean && (
        <Lightformer
          form="rect"
          intensity={3}
          position={[7, -3, -4]}
          scale={[8, 8, 1]}
          target={[0, 0, 0]}
        />
      )}
    </Environment>
  );
}

/**
 * On `frameloop="demand"` nothing redraws unless something asks it to, so a
 * still scene must be invalidated after layout settles, after the environment
 * cubemap resolves, and on every resize — otherwise it renders once at the
 * default 300x150 and stays blank.
 */
function DemandPainter({
  active,
  onPainted,
}: {
  active: boolean;
  onPainted?: () => void;
}) {
  const invalidate = useThree((s) => s.invalidate);
  const size = useThree((s) => s.size);
  const told = useRef(false);

  useEffect(() => {
    if (!active) return;
    invalidate();
    const timers = [60, 220, 600, 1400].map((ms) =>
      window.setTimeout(() => invalidate(), ms),
    );
    return () => timers.forEach(clearTimeout);
  }, [active, invalidate, size.width, size.height]);

  // Only hand over from the vector fallback once a real frame has been drawn
  // at a real size.
  useFrame(() => {
    if (told.current || size.width < 40) return;
    told.current = true;
    onPainted?.();
  });

  return null;
}

export default function ChromeEmblem3D({
  lean = false,
  still = false,
  paused = false,
  onPainted,
}: {
  lean?: boolean;
  still?: boolean;
  /** True once the hero has scrolled out of view. */
  paused?: boolean;
  onPainted?: () => void;
}) {
  // Rendering a 60fps scene that nobody can see is the single most expensive
  // thing this page could do. Stop entirely once the hero leaves the viewport.
  const frameloop = paused ? "never" : still ? "demand" : "always";
  usePointerTracking();

  return (
    <Canvas
      dpr={lean ? [1, 1.5] : [1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 17], fov: 38 }}
      frameloop={frameloop}
      style={{ pointerEvents: "none" }}
    >
      <DemandPainter active={still} onPainted={onPainted} />
      <CameraRig still={still} />
      <StudioEnvironment lean={lean} />
      <ambientLight intensity={0.35} />
      <Emblem3D still={still} />
      {!lean && <Bars />}
      {!still && (
        <>
          <Sparkles
            count={26}
            scale={[16, 10, 6]}
            size={2.4}
            speed={0.28}
            opacity={0.6}
            color="#dbe4ec"
          />
          {/* A second, warmer drift low in the scene — reads as embers coming
              off the red rim and matches the page atmosphere. */}
          <Sparkles
            count={14}
            scale={[14, 7, 5]}
            position={[0, -2.5, 1]}
            size={3}
            speed={0.2}
            opacity={0.5}
            color="#ff6a52"
          />
        </>
      )}
    </Canvas>
  );
}
