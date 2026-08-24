"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/icons";
import { channelUrl, type Episode } from "@/data/content";

/**
 * The channel, rebuilt in Bandzclub's own chrome rather than dropped in as a
 * YouTube embed grid. Selecting an episode swaps the player above the grid —
 * no route change, so the browsing rhythm stays intact.
 *
 * Comments deliberately live on YouTube: engagement there feeds the algorithm
 * that gets the next video seen, and it costs no moderation here. The strip
 * under the player hands people over rather than pretending to host them.
 */
export function ChannelBrowser({ episodes }: { episodes: Episode[] }) {
  const categories = useMemo(
    () => ["All", ...new Set(episodes.map((e) => e.kicker))],
    [episodes],
  );
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [activeSlug, setActiveSlug] = useState(episodes[0]?.slug);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return episodes.filter((e) => {
      if (filter !== "All" && e.kicker !== filter) return false;
      if (!q) return true;
      // Search title, blurb and the bullet points, so "credit" or "funding"
      // finds an episode even when it isn't in the title.
      return [e.title, e.blurb, e.kicker, ...e.points]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [episodes, filter, query]);
  const active = episodes.find((e) => e.slug === activeSlug) ?? episodes[0];

  if (!active) return null;

  const videoUrl = active.youtubeId
    ? `https://www.youtube.com/watch?v=${active.youtubeId}`
    : channelUrl;

  return (
    <div>
      {/* ── PLAYER ───────────────────────────────────────────── */}
      <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr]">
        <div>
          <div className="case-frame relative overflow-hidden">
            <div className="relative aspect-video w-full bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  {active.youtubeId ? (
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}?rel=0`}
                      title={active.title}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      {active.thumb && (
                        <Image
                          src={active.thumb}
                          alt=""
                          fill
                          sizes="(min-width:1024px) 60vw, 100vw"
                          className="object-cover opacity-45"
                          priority
                        />
                      )}
                      {/* Honest empty state. No fake player, no dead play
                          button that does nothing when clicked. */}
                      <div className="absolute inset-0 grid place-items-center bg-black/55 p-6 text-center">
                        <div>
                          <p className="font-display text-[0.6875rem] uppercase tracking-[0.24em] text-[var(--signal)]">
                            Not published yet
                          </p>
                          <p className="mx-auto mt-3 max-w-[34ch] text-[0.875rem] leading-relaxed text-[var(--text-dim)]">
                            This episode is in production. Everything already
                            live is on the channel.
                          </p>
                          <a
                            href={channelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--signal)] px-5 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[var(--signal-hi)]"
                          >
                            <Icon name="youtube" className="h-4 w-4" />
                            Open the channel
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <h2 className="mt-6 font-display text-[clamp(1.4rem,3.4vw,2.1rem)] uppercase leading-tight tracking-tight text-[var(--chrome-1)]">
            {active.title}
          </h2>
          <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-[var(--text-dim)]">
            {active.blurb}
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {active.points.map((p) => (
              <li
                key={p}
                className="text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--text-faint)]"
              >
                {p}
              </li>
            ))}
          </ul>

          {/* ── COMMENT HANDOFF ──────────────────────────────── */}
          <div className="edge-light mt-8 flex flex-wrap items-center justify-between gap-4 bg-[linear-gradient(168deg,rgba(255,255,255,0.045),rgba(0,0,0,0.28))] p-5">
            <div className="flex items-center gap-3">
              <Icon name="chat" className="h-5 w-5 text-[var(--signal)]" />
              <p className="text-[0.875rem] leading-snug text-[var(--text-dim)]">
                Got a question on this one?
                <span className="block text-[0.75rem] text-[var(--text-faint)]">
                  Drop it in the comments — he answers them.
                </span>
              </p>
            </div>
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] px-5 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[var(--chrome-1)] transition-colors duration-200 hover:border-[var(--signal)] hover:text-white"
            >
              <Icon name="youtube" className="h-4 w-4" />
              Comment on YouTube
            </a>
          </div>
        </div>

        {/* ── QUEUE ──────────────────────────────────────────── */}
        <div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`rounded-full border px-4 py-2 text-[0.6875rem] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                  filter === c
                    ? "border-[var(--signal)] bg-[var(--signal)]/12 text-white"
                    : "border-[var(--hairline)] text-[var(--text-faint)] hover:text-[var(--chrome-1)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <ul className="mt-6 grid gap-3">
            {shown.map((e) => {
              const on = e.slug === active.slug;
              return (
                <li key={e.slug}>
                  <button
                    type="button"
                    onClick={() => setActiveSlug(e.slug)}
                    aria-current={on ? "true" : undefined}
                    className={`group flex w-full gap-4 rounded-[10px] border p-2.5 text-left transition-colors duration-200 ${
                      on
                        ? "border-[var(--signal)]/45 bg-white/[0.05]"
                        : "border-transparent hover:border-[var(--hairline)] hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className="relative aspect-video w-[38%] shrink-0 overflow-hidden rounded-[6px] bg-black">
                      {e.thumb ? (
                        <Image
                          src={e.thumb}
                          alt=""
                          fill
                          sizes="200px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <span className="grid h-full w-full place-items-center bg-[linear-gradient(150deg,#15181b,#080909)]">
                          <Icon
                            name="play"
                            className="h-5 w-5 text-[var(--chrome-4)]"
                          />
                        </span>
                      )}
                    </span>
                    <span className="min-w-0 flex-1 py-0.5">
                      <span className="block text-[0.5625rem] uppercase tracking-[0.2em] text-[var(--signal)]">
                        {e.kicker}
                      </span>
                      <span className="mt-1.5 block font-display text-[0.9375rem] uppercase leading-[1.15] tracking-tight text-[var(--chrome-1)]">
                        {e.title}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
