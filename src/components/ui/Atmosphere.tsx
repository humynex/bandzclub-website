import Image from "next/image";
/**
 * Fixed, pointer-events-none atmosphere. Never attached to a scrolling
 * container — grain on a scroller forces continuous GPU repaints.
 *
 * Each layer animates on `transform` or `background-position` only, so the
 * compositor handles them without repainting the page underneath. No blend
 * modes: those force the whole document to re-composite every frame.
 */
export function Atmosphere() {
  return (
    <div className="atmos" aria-hidden="true">
      {/* The real stone plate the brand is shot on. Rendered through
          next/image rather than as a CSS background so it's served as an
          optimised, correctly-sized AVIF/WebP instead of a 2.5MB PNG.
          Everything else in here is lit against this. */}
      <div className="atmos atmos-rock">
        <Image
          src="/brand/rock-bg.png"
          alt=""
          fill
          priority
          quality={72}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="atmos atmos-wall-key" />
      <div className="atmos atmos-wall-sheen" />
      <div className="atmos atmos-falloff" />
      <div className="atmos atmos-rules" />
      <div className="atmos atmos-haze" />
      <div className="atmos atmos-haze-2" />
      {/* Red belongs to the skyline and the horizon line, the way it does in
          every Bandzclub graphic — light coming off a city, never a red wash. */}
      <div className="atmos atmos-forge" />
      <div className="atmos atmos-horizon" />
      <div className="atmos atmos-signal-bloom" />
      <div className="atmos atmos-embers" />
      <div className="atmos atmos-sweep" />
      <div className="atmos atmos-vignette" />
      <div className="atmos atmos-grain" />
    </div>
  );
}
