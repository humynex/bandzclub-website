# Bandzclub Creative Studio

Seven-page site for Bandzclub Creative Studio (Houston, TX). Next.js 16 App
Router, Tailwind v4, Framer Motion, Lenis, and React Three Fiber for the hero.

```bash
npm run dev     # http://localhost:3007
npm run build
npm start
```

## Art direction — "Chrome Vault"

Brutalist-luxury: liquid metal on void. Off-black ground, a seven-stop chrome
ramp, and YouTube signal-red (`--signal`) as the only saturated colour —
reserved for CTAs and live indicators. Display type is Anton, body is Chivo.
All tokens live at the top of `src/app/globals.css`; components never hardcode
colour.

### Signature motifs

| Motif | Where |
|---|---|
| Spine Stack — the flyer's book stack, interactive | `src/components/SpineStack.tsx` |
| Chrome type — extrude / face / specular sweep | `src/components/ui/ChromeText.tsx` |
| Bevelled glass tiles | `.glass-tile` in `globals.css` |
| Platinum plaque frames | `.plaque` in `globals.css` |
| Haze + grain atmosphere | `src/components/ui/Atmosphere.tsx` |

The metal reads as metal because of the hard flip at ~49–51% in the
`.chrome-face` gradient — that horizon step is the whole trick. Softening it
turns the type back into a grey gradient.

## The hero

`src/components/hero/` extrudes the authored B-star vector
(`src/components/Emblem.tsx`) into real bevelled geometry and lights it with a
procedural `Lightformer` environment rather than a downloaded HDRI — the
hard-edged strips are what produce studio-chrome highlights, and it costs a
few KB instead of a few MB. The environment is static and the emblem rotates,
so reflections crawl for free.

`ChromeStage` always paints the flat vector emblem first and only fades it out
once WebGL has genuinely rendered a frame at a real size. There is no blank
state to fall into.

## Motion rules

Animations are progressive enhancement, never a precondition for seeing the
page. Two guards enforce that:

- **Route transitions and the curtain are pure CSS**, and every resting state
  is the *finished* state with no fill mode. A frozen animation timeline
  degrades to "no transition", not "blank page" or "stuck behind a curtain".
- **Scroll reveals carry `data-motion`.** `globals.css` forces those elements
  visible under `.no-js` (set on `<html>`, removed by an inline script during
  parse) and under `prefers-reduced-motion`.

If you add a Framer reveal with a hidden initial state, put `data-motion` on
it or it can strand content at `opacity: 0`.

## Content

Every price, package, service and tagline is transcribed from the studio's own
flyers and lives in `src/data/`. Change a number there and it updates
everywhere. `src/data/content.ts` deliberately ships without YouTube IDs — add
the real 11-character IDs and the cards become live embeds.

## Before it goes live

- [ ] Add `NEXT_PUBLIC_WEB3FORMS_KEY` (see `.env.local.example`)
- [ ] Real YouTube IDs in `src/data/content.ts`
- [ ] Real photography for the Grind Time case study if available
- [ ] OG image at `src/app/opengraph-image.*`
