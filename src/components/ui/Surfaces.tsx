import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/icons";

/** The bevelled glass icon tile from the flyers. */
export function GlassTile({
  icon,
  label,
  sub,
  className = "",
}: {
  icon: IconName;
  label: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={`group flex flex-col items-center gap-3 ${className}`}>
      <div className="glass-tile grid h-16 w-16 place-items-center rounded-[14px] md:h-[4.5rem] md:w-[4.5rem]">
        <Icon
          name={icon}
          className="h-7 w-7 text-[var(--chrome-1)] transition-colors duration-200 group-hover:text-white md:h-8 md:w-8"
        />
      </div>
      <div className="text-center">
        <p className="text-[0.6875rem] font-semibold uppercase leading-tight tracking-[0.14em] text-[var(--chrome-2)]">
          {label}
        </p>
        {sub && (
          <p className="mt-1 text-[0.625rem] uppercase tracking-[0.1em] text-[var(--text-faint)]">
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

/** Platinum-record plaque framing. */
export function PlaqueFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`plaque rounded-[3px] ${className}`}>
      <div className="overflow-hidden rounded-[1px]">{children}</div>
    </div>
  );
}

/** Small uppercase section marker with a chrome tick. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`label-micro flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-[linear-gradient(90deg,transparent,var(--chrome-2))]" />
      {children}
    </p>
  );
}

export function ChromeRule({ className = "" }: { className?: string }) {
  return <div className={`chrome-rule ${className}`} aria-hidden="true" />;
}
