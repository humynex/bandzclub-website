/**
 * Grind Time Clothing marks, authored as vector so the before/after reads
 * crisply at any size. "Before" is the flat pre-rebrand wordmark; "after" is
 * the crested chrome identity.
 */

export function GrindTimeBefore({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-4 bg-[#0b0c0d] ${className}`}
    >
      <svg viewBox="0 0 100 100" className="h-[38%] w-auto" aria-hidden="true">
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#d8dade"
          strokeWidth="3"
        />
        <text
          x="50"
          y="66"
          textAnchor="middle"
          fill="#d8dade"
          fontFamily="var(--font-chivo), sans-serif"
          fontSize="46"
          fontWeight="400"
        >
          G
        </text>
      </svg>
      <div className="text-center">
        <p className="text-[clamp(0.8rem,1.7vw,1.15rem)] tracking-[0.3em] text-[#d8dade]">
          GRIND TIME
        </p>
        <p className="mt-1.5 text-[clamp(0.5rem,1vw,0.7rem)] tracking-[0.42em] text-[#8d9298]">
          CLOTHING
        </p>
      </div>
    </div>
  );
}

export function GrindTimeAfter({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-4 bg-[#08090a] ${className}`}
    >
      <svg viewBox="0 0 120 118" className="h-[46%] w-auto" aria-hidden="true">
        <defs>
          <linearGradient id="gt-chrome" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="17%" stopColor="#e7ecf1" />
            <stop offset="34%" stopColor="#a9b2ba" />
            <stop offset="48%" stopColor="#4e545b" />
            <stop offset="51%" stopColor="#cfd7de" />
            <stop offset="62%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="#9aa2ab" />
            <stop offset="100%" stopColor="#c4ccd4" />
          </linearGradient>
        </defs>
        <g fill="url(#gt-chrome)">
          {/* crown */}
          <path d="M34 26 L43 34 L60 18 L77 34 L86 26 L83 40 H37 Z" />
          {/* shield */}
          <path d="M60 44 L96 54 v22c0 18-14 32-36 38-22-6-36-20-36-38V54Z" />
        </g>
        <path
          d="M60 50 L90 58 v18c0 15-12 27-30 32-18-5-30-17-30-32V58Z"
          fill="#0b0c0d"
        />
        <text
          x="60"
          y="92"
          textAnchor="middle"
          fill="url(#gt-chrome)"
          fontFamily="var(--font-anton), sans-serif"
          fontSize="44"
        >
          G
        </text>
      </svg>
      <div className="text-center">
        <p className="chrome-stack font-display text-[clamp(0.95rem,2.2vw,1.5rem)] uppercase tracking-[0.14em]">
          <span className="chrome-face">Grind Time</span>
        </p>
        <p className="mt-1.5 text-[clamp(0.5rem,1vw,0.7rem)] tracking-[0.46em] text-[#aab2ba]">
          CLOTHING
        </p>
      </div>
    </div>
  );
}
