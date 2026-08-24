/**
 * Bespoke icon set for Bandzclub. Hand-authored to match the bevelled glass
 * tiles on the flyers. A stock icon library is an instant tell, so there
 * isn't one here. 24x24 grid, stroke 1.5 throughout.
 */

type Props = React.SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const icons = {
  crown: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M3 8.5l3.4 2.6L12 4.5l5.6 6.6L21 8.5l-1.7 9.2H4.7L3 8.5Z" />
      <path d="M4.7 19.5h14.6" />
    </svg>
  ),
  penNib: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M12 2.5 18 8v7l-6 6.5L6 15V8l6-5.5Z" />
      <circle cx="12" cy="10.5" r="2.2" />
      <path d="M12 12.7V21.5" />
    </svg>
  ),
  globe: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 2.6 15 0 18M12 3C9.4 5.6 9.4 18.4 12 21" />
    </svg>
  ),
  chartArrow: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M3.5 20h17" />
      <path d="M6 20v-5M10.3 20v-8.5M14.6 20v-4" />
      <path d="M13 8.2 17 4.4l3.6 3.4" />
      <path d="M17 4.4V13" />
    </svg>
  ),
  clapper: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M3 9.5h18v9.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19V9.5Z" />
      <path d="m3 9.5.9-4.6 17.7 2.3-.6 2.3" />
      <path d="m8.4 5.5-1.2 4M13.7 6.2l-1.2 4" />
      <path d="m10.4 13.2 4.4 2.4-4.4 2.4v-4.8Z" />
    </svg>
  ),
  megaphone: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M4 10.5v3a2 2 0 0 0 2 2h1.8l8.7 4.3V4.2L7.8 8.5H6a2 2 0 0 0-2 2Z" />
      <path d="M7.8 15.5v4.3M19.4 9v6" />
    </svg>
  ),
  mic: (p: Props) => (
    <svg {...base} {...p}>
      <rect x="9" y="2.8" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0" />
      <path d="M12 18v3.2M8.6 21.2h6.8" />
    </svg>
  ),
  dollar: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M12 2.6v18.8" />
      <path d="M16.4 6.6H9.8a3.1 3.1 0 0 0 0 6.2h4.4a3.1 3.1 0 0 1 0 6.2H7.2" />
    </svg>
  ),
  shield: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M12 2.6 4.5 5.6v6.1c0 4.4 3.1 8.3 7.5 9.7 4.4-1.4 7.5-5.3 7.5-9.7V5.6L12 2.6Z" />
      <path d="m8.8 12 2.3 2.3 4.1-4.6" />
    </svg>
  ),
  rocket: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M13.6 3.4c3.5 2 5.6 5.6 5.6 9.6l-3.6 3.6H8.4L4.8 13c0-4 2.1-7.6 5.6-9.6a3.2 3.2 0 0 1 3.2 0Z" />
      <circle cx="12" cy="10.2" r="2" />
      <path d="M9.6 16.6 8 20.6l3.2-1.6M14.4 16.6l1.6 4-3.2-1.6" />
    </svg>
  ),
  star: (p: Props) => (
    <svg {...base} {...p}>
      <path d="m12 3 2.7 5.9 6.3.7-4.7 4.3 1.3 6.4L12 17.1 6.4 20.3l1.3-6.4L3 9.6l6.3-.7L12 3Z" />
    </svg>
  ),
  starFilled: (p: Props) => (
    <svg {...base} fill="currentColor" strokeWidth={1} {...p}>
      <path d="m12 3 2.7 5.9 6.3.7-4.7 4.3 1.3 6.4L12 17.1 6.4 20.3l1.3-6.4L3 9.6l6.3-.7L12 3Z" />
    </svg>
  ),
  diamond: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M6.2 4h11.6l3.4 5-9.2 11L2.8 9l3.4-5Z" />
      <path d="M2.8 9h18.4M9.2 4l-2 5 4.8 11 4.8-11-2-5" />
    </svg>
  ),
  target: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="4.8" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" />
    </svg>
  ),
  audience: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="9" cy="8.4" r="3.1" />
      <path d="M2.9 19.4a6.1 6.1 0 0 1 12.2 0" />
      <path d="M16.2 6.1a3.1 3.1 0 0 1 0 6" />
      <path d="M17.4 13.9a6.1 6.1 0 0 1 3.7 5.5" />
    </svg>
  ),
  growth: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M3.5 17.6 9 11.9l3.4 3.2 7.6-8.4" />
      <path d="M15.4 6.7H20v4.6" />
      <path d="M3.5 20.6h17" />
    </svg>
  ),
  money: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M9.5 6.6h5c3.4 1.5 5.6 4.9 5.6 8.6a4.6 4.6 0 0 1-4.6 4.6H7.5a4.6 4.6 0 0 1-4.6-4.6c0-3.7 2.2-7.1 5.6-8.6Z" />
      <path d="M9.8 6.6 8.4 3.2h7.2l-1.4 3.4" />
      <path d="M12 10.4v6.6M13.9 12h-3a1.5 1.5 0 0 0 0 3h2.2a1.5 1.5 0 0 1 0 3h-3" />
    </svg>
  ),
  ladder: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M3 20.5h4.2v-4.2h4.2v-4.2h4.2V7.9H20" />
      <path d="M15.6 4.6 20 7.9l-3.4 3.6" />
    </svg>
  ),
  brick: (p: Props) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="1.2" />
      <path d="M3 9.7h18M3 14.3h18M9.4 5v4.7M14.6 9.7v4.6M9.4 14.3V19" />
    </svg>
  ),
  trophy: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M7.4 3.4h9.2v5.2a4.6 4.6 0 0 1-9.2 0V3.4Z" />
      <path d="M7.4 5.1H4.6v1.6a3 3 0 0 0 2.8 3M16.6 5.1h2.8v1.6a3 3 0 0 1-2.8 3" />
      <path d="M12 13.2v3.6M8.6 20.6h6.8l-.9-3.8H9.5l-.9 3.8Z" />
    </svg>
  ),
  box: (p: Props) => (
    <svg {...base} {...p}>
      <path d="m12 3 8.4 4.2v9.6L12 21l-8.4-4.2V7.2L12 3Z" />
      <path d="m3.6 7.2 8.4 4.3 8.4-4.3M12 11.5V21" />
    </svg>
  ),
  card: (p: Props) => (
    <svg {...base} {...p}>
      <rect x="2.6" y="5.2" width="18.8" height="13.6" rx="2" />
      <path d="M2.6 9.8h18.8M6 14.8h4" />
    </svg>
  ),
  chat: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M20.8 11.4c0 4.2-3.9 7.6-8.8 7.6a10 10 0 0 1-2.6-.34L4.2 20.6l1.2-3.6a7.1 7.1 0 0 1-2.2-5.1c0-4.2 4-7.6 8.8-7.6s8.8 3.4 8.8 7.6Z" />
      <path d="M8.4 11.4h.01M12 11.4h.01M15.6 11.4h.01" />
    </svg>
  ),
  pin: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M12 21.4s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </svg>
  ),
  mail: (p: Props) => (
    <svg {...base} {...p}>
      <rect x="2.6" y="5" width="18.8" height="14" rx="2" />
      <path d="m3.4 6.6 8.6 6 8.6-6" />
    </svg>
  ),
  instagram: (p: Props) => (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (p: Props) => (
    <svg {...base} {...p}>
      <rect x="2.4" y="5.4" width="19.2" height="13.2" rx="4" />
      <path d="m10.3 9.4 5 2.6-5 2.6V9.4Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  play: (p: Props) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8.4 6 3.6-6 3.6V8.4Z" />
    </svg>
  ),
  check: (p: Props) => (
    <svg {...base} {...p}>
      <path d="m4.5 12.6 5 5 10-11" />
    </svg>
  ),
  arrow: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M3.8 12h16.4M14.4 6l5.8 6-5.8 6" />
    </svg>
  ),
  calendar: (p: Props) => (
    <svg {...base} {...p}>
      <rect x="3.2" y="5" width="17.6" height="16" rx="2" />
      <path d="M3.2 10h17.6M8 3v4M16 3v4" />
    </svg>
  ),
  cart: (p: Props) => (
    <svg {...base} {...p}>
      <path d="M2.6 3.6h2.6l2.4 11.2h9.6l2.2-8.2H6.2" />
      <circle cx="9.4" cy="19" r="1.5" />
      <circle cx="16.8" cy="19" r="1.5" />
    </svg>
  ),
  sparkle: (p: Props) => (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M12 1.6c.6 5.4 4.4 9.2 9.8 9.8-5.4.6-9.2 4.4-9.8 9.8-.6-5.4-4.4-9.2-9.8-9.8 5.4-.6 9.2-4.4 9.8-9.8Z" />
    </svg>
  ),
} satisfies Record<string, (p: Props) => React.ReactElement>;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className = "h-6 w-6",
  ...rest
}: { name: IconName } & Props) {
  const C = icons[name];
  return <C className={className} aria-hidden="true" focusable="false" {...rest} />;
}
