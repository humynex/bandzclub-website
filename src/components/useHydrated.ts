"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * False during SSR, true once React has hydrated on the client.
 *
 * Forms use this to keep their submit button disabled until the JavaScript
 * handler is genuinely attached. Without it, a click landing before hydration
 * triggers a *native* form submission: the browser serialises every field into
 * the URL as a GET query string, navigates, and the enquiry is silently lost —
 * with the visitor's name, email and phone number sitting in their address bar
 * and in any proxy or analytics log along the way.
 *
 * Deliberately `useSyncExternalStore` rather than `useState` + `useEffect`.
 * The store snapshot is read during the hydration render, so the button
 * enables as part of the same commit that attaches the handler. An effect, by
 * contrast, is a passive one flushed after paint — and anywhere paint is
 * delayed or suppressed the button would stay stuck disabled.
 */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
