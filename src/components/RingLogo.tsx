import Image from "next/image";

/**
 * The official mark — chrome B★ inside the ring, with the red inner glow.
 *
 * The source file is a square photograph on near-black, not a transparent
 * cut-out. Rather than ask for a new export, it's masked to a circle: the
 * ring already fills the frame, so a radial mask removes the square corners
 * and the remaining black falls into the wall behind it. That's why this
 * lives in one component — the mask has to be identical everywhere the mark
 * appears, or the seams show at different sizes.
 */
export function RingLogo({
  size = 40,
  className = "",
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/brand/logo-ring.png"
        alt="Bandzclub Creative Studio"
        width={size}
        height={size}
        priority={priority}
        quality={90}
        className="h-full w-full object-contain"
        style={{
          maskImage:
            "radial-gradient(circle at 50% 50%, #000 68%, rgba(0,0,0,0.55) 78%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, #000 68%, rgba(0,0,0,0.55) 78%, transparent 88%)",
        }}
      />
    </span>
  );
}
