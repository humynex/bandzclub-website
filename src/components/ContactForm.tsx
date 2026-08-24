"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useHydrated } from "@/components/useHydrated";
import { Icon } from "@/components/icons";
import { packages } from "@/data/packages";

/**
 * Web3Forms endpoint. Replace the access key with the studio's own from
 * web3forms.com — the form posts nowhere useful until you do.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const budgets = [
  "Under $500",
  "$500 – $999",
  "$1,000 – $2,999",
  "$3,000 – $5,999",
  "$6,000 – $9,999",
  "$10,000+",
  "Not sure yet",
];

const interests = [
  "Branding",
  "Logo Design",
  "Website Design",
  "Marketing",
  "Social Media",
  "Content Creation",
  "Credit Repair & Funding",
];

function validate(fd: FormData): Errors {
  const e: Errors = {};
  const name = String(fd.get("name") ?? "").trim();
  const email = String(fd.get("email") ?? "").trim();
  const message = String(fd.get("message") ?? "").trim();

  if (name.length < 2) e.name = "Enter your name so we know who we're talking to.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    e.email = "That email doesn't look right — check for a typo.";
  if (message.length < 12)
    e.message = "Tell us a little more — a sentence or two is plenty.";
  return e;
}

// 16px minimum: anything smaller makes iOS Safari zoom the page on focus.
const field =
  "w-full border border-[var(--hairline-hi)] bg-black/40 px-4 py-3 text-base text-white transition-colors duration-200 placeholder:text-[var(--text-faint)] focus:border-[var(--chrome-2)] focus:outline-none";

export function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("package");
  const presetName = packages.find((p) => p.slug === preset);

  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">(
    "idle",
  );
  const hydrated = useHydrated();

  function focusFirstError(e: Errors) {
    const first = (["name", "email", "message"] as const).find((k) => e[k]);
    if (first)
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus();
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const found = validate(fd);
    setErrors(found);
    if (Object.keys(found).length) {
      focusFirstError(found);
      return;
    }

    if (!ACCESS_KEY) {
      setState("failed");
      return;
    }

    setState("sending");
    fd.append("access_key", ACCESS_KEY);
    fd.append("subject", "New enquiry from bandzclub.com");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      setState(res.ok ? "sent" : "failed");
      if (res.ok) formRef.current?.reset();
    } catch {
      setState("failed");
    }
  }

  if (state === "sent") {
    return (
      <div
        className="edge-light flex flex-col items-start gap-5 bg-[linear-gradient(168deg,rgba(255,255,255,0.05),rgba(0,0,0,0.3))] p-10"
        role="status"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--signal)]">
          <Icon name="check" className="h-6 w-6 text-white" />
        </span>
        <h2 className="font-display text-2xl uppercase tracking-tight text-white">
          Got it.
        </h2>
        <p className="max-w-[42ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
          Your message is in. We reply to everything — usually within a business
          day. If it&rsquo;s urgent, DM the studio on Instagram.
        </p>
      </div>
    );
  }

  return (
    // method="post" is a backstop: should a native submit ever escape the
    // handler, it must not serialise the visitor's details into the URL.
    <form
      ref={formRef}
      method="post"
      onSubmit={onSubmit}
      noValidate
      className="grid gap-6"
    >
      {/* Web3Forms honeypot */}
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
            onBlur={(e) =>
              setErrors((p) => ({
                ...p,
                name:
                  e.target.value.trim().length < 2
                    ? "Enter your name so we know who we're talking to."
                    : undefined,
              }))
            }
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
            onBlur={(e) =>
              setErrors((p) => ({
                ...p,
                email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.target.value.trim())
                  ? undefined
                  : "That email doesn't look right — check for a typo.",
              }))
            }
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
            className={field}
          />
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

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label
            htmlFor="interest"
            className="label-micro !text-[var(--chrome-2)]"
          >
            What do you need?
          </label>
          <select
            id="interest"
            name="interest"
            className={field}
            defaultValue={presetName ? "Branding" : ""}
          >
            <option value="">Choose one</option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="budget" className="label-micro !text-[var(--chrome-2)]">
            Budget
          </label>
          <select id="budget" name="budget" className={field} defaultValue="">
            <option value="">Choose a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {presetName && (
        <input
          type="hidden"
          name="package"
          value={`${presetName.name} ${presetName.sub} — ${presetName.price}`}
        />
      )}

      <div className="grid gap-2">
        <label htmlFor="message" className="label-micro !text-[var(--chrome-2)]">
          What are you building?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-err" : "message-help"}
          className={`${field} resize-y`}
          defaultValue={
            presetName
              ? `I'm interested in the ${presetName.name} ${presetName.sub} package (${presetName.price}). `
              : ""
          }
          onBlur={(e) =>
            setErrors((p) => ({
              ...p,
              message:
                e.target.value.trim().length < 12
                  ? "Tell us a little more — a sentence or two is plenty."
                  : undefined,
            }))
          }
        />
        {errors.message ? (
          <p id="message-err" className="text-xs text-[var(--signal-hi)]">
            {errors.message}
          </p>
        ) : (
          <p id="message-help" className="text-xs text-[var(--text-faint)]">
            Where you are now, and where you want to be. That&rsquo;s enough to
            start.
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
          {state === "sending" ? "Sending…" : "Send it"}
        </MagneticButton>
        <p aria-live="polite" className="text-xs text-[var(--text-faint)]">
          {state === "sending" ? "Sending your message…" : ""}
        </p>
      </div>
    </form>
  );
}
