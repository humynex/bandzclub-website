"use client";

import { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useHydrated } from "@/components/useHydrated";
import { packages } from "@/data/packages";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

type Field = "name" | "email" | "business" | "goal";
type Errors = Partial<Record<Field, string>>;

const budgets = [
  "Under $500",
  "$500 – $999",
  "$1,000 – $2,999",
  "$3,000 – $5,999",
  "$6,000 – $9,999",
  "$10,000+",
  "Not sure yet",
];

const timelines = ["Right away", "Within a month", "1–3 months", "Just exploring"];

const needs = [
  "Branding",
  "Logo Design",
  "Website",
  "Social Media Content",
  "Marketing Strategy",
  "Credit Repair & Funding",
  "Business Setup",
];

const rules: Record<Field, (v: string) => string | undefined> = {
  name: (v) =>
    v.trim().length < 2 ? "Enter your name so we know who we're talking to." : undefined,
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
      ? undefined
      : "That email doesn't look right — check for a typo.",
  business: (v) =>
    v.trim().length < 2 ? "Enter your business or artist name." : undefined,
  goal: (v) =>
    v.trim().length < 12
      ? "A sentence or two is plenty — what are you trying to build?"
      : undefined,
};

const field =
  "w-full border border-[var(--hairline-hi)] bg-black/40 px-4 py-3 text-base text-white transition-colors duration-200 placeholder:text-[var(--text-faint)] focus:border-[var(--chrome-2)] focus:outline-none";

/**
 * Qualifying application. Deliberately asks for budget and timeline before the
 * call so the studio isn't spending 20 minutes discovering someone has $200
 * and no business yet.
 */
export function BookingForm() {
  const router = useRouter();
  const params = useSearchParams();
  const preset = packages.find((p) => p.slug === params.get("package"));

  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "failed">("idle");
  const hydrated = useHydrated();

  function check(name: Field, value: string) {
    setErrors((p) => ({ ...p, [name]: rules[name](value) }));
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);

    const found: Errors = {};
    (Object.keys(rules) as Field[]).forEach((k) => {
      const msg = rules[k](String(fd.get(k) ?? ""));
      if (msg) found[k] = msg;
    });
    setErrors(found);

    const first = (Object.keys(rules) as Field[]).find((k) => found[k]);
    if (first) {
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    if (!ACCESS_KEY) {
      setState("failed");
      return;
    }

    setState("sending");
    fd.append("access_key", ACCESS_KEY);
    fd.append("subject", "Strategy call application — bandzclub.com");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      if (res.ok) {
        router.push("/thank-you");
        return;
      }
      setState("failed");
    } catch {
      setState("failed");
    }
  }

  return (
    // method="post" is a backstop: should a native submit ever escape the
    // handler, it must not serialise the applicant's details into the URL.
    <form
      ref={formRef}
      method="post"
      onSubmit={onSubmit}
      noValidate
      className="grid gap-6"
    >
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="label-micro !text-[var(--chrome-2)]">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-err" : undefined}
            className={field}
            onBlur={(e) => check("name", e.target.value)}
          />
          {errors.name && (
            <p id="name-err" className="text-xs text-[var(--signal-hi)]">
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="label-micro !text-[var(--chrome-2)]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-err" : undefined}
            className={field}
            onBlur={(e) => check("email", e.target.value)}
          />
          {errors.email && (
            <p id="email-err" className="text-xs text-[var(--signal-hi)]">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label
            htmlFor="business"
            className="label-micro !text-[var(--chrome-2)]"
          >
            Business or artist name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            required
            aria-invalid={!!errors.business}
            aria-describedby={errors.business ? "business-err" : undefined}
            className={field}
            onBlur={(e) => check("business", e.target.value)}
          />
          {errors.business && (
            <p id="business-err" className="text-xs text-[var(--signal-hi)]">
              {errors.business}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor="phone" className="label-micro !text-[var(--chrome-2)]">
            Phone{" "}
            <span className="normal-case tracking-normal text-[var(--text-faint)]">
              (optional)
            </span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={field}
          />
        </div>
      </div>

      <fieldset className="grid gap-3">
        <legend className="label-micro !text-[var(--chrome-2)] mb-1">
          What do you need? Tick everything that applies
        </legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {needs.map((n) => (
            <label
              key={n}
              className="flex cursor-pointer items-center gap-3 border border-[var(--hairline)] px-4 py-3 text-[0.875rem] text-[var(--text-dim)] transition-colors duration-200 hover:border-[var(--hairline-hi)] hover:text-white has-[:checked]:border-[var(--signal)] has-[:checked]:text-white"
            >
              <input
                type="checkbox"
                name="needs"
                value={n}
                className="h-4 w-4 shrink-0 accent-[var(--signal)]"
              />
              {n}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="budget" className="label-micro !text-[var(--chrome-2)]">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            className={field}
            defaultValue={preset ? preset.price : ""}
          >
            <option value="">Choose a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="timeline"
            className="label-micro !text-[var(--chrome-2)]"
          >
            How soon
          </label>
          <select id="timeline" name="timeline" className={field} defaultValue="">
            <option value="">Choose one</option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {preset && (
        <input
          type="hidden"
          name="package"
          value={`${preset.name} ${preset.sub} — ${preset.price}`}
        />
      )}

      <div className="grid gap-2">
        <label htmlFor="goal" className="label-micro !text-[var(--chrome-2)]">
          Where are you now, and where do you want to be?
        </label>
        <textarea
          id="goal"
          name="goal"
          rows={5}
          required
          aria-invalid={!!errors.goal}
          aria-describedby={errors.goal ? "goal-err" : "goal-help"}
          className={`${field} resize-y`}
          onBlur={(e) => check("goal", e.target.value)}
        />
        {errors.goal ? (
          <p id="goal-err" className="text-xs text-[var(--signal-hi)]">
            {errors.goal}
          </p>
        ) : (
          <p id="goal-help" className="text-xs text-[var(--text-faint)]">
            The more honest this is, the more useful the call is.
          </p>
        )}
      </div>

      {state === "failed" && (
        <p
          role="alert"
          className="border border-[var(--signal)]/50 bg-[var(--signal)]/10 px-4 py-3 text-sm text-[var(--signal-hi)]"
        >
          {ACCESS_KEY
            ? "That didn't send. Check your connection and try again, or email "
            : "The form isn't connected yet. In the meantime, email "}
          <a className="underline" href="mailto:info@bandzclub.com">
            info@bandzclub.com
          </a>
          .
        </p>
      )}

      <div className="flex items-center gap-5">
        <MagneticButton
          type="submit"
          variant="signal"
          withArrow
          disabled={!hydrated || state === "sending"}
        >
          {state === "sending" ? "Sending…" : "Request my call"}
        </MagneticButton>
        <p aria-live="polite" className="text-xs text-[var(--text-faint)]">
          {state === "sending" ? "Sending your application…" : ""}
        </p>
      </div>
    </form>
  );
}
