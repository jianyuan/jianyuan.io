"use client";

import { ThemeProvider } from "next-themes";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: `/ingest`,
    ui_host: "https://us.i.posthog.com",
    capture_pageview: false,
    capture_pageleave: true,
  });
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PostHogProvider client={posthog}>{children}</PostHogProvider>
    </ThemeProvider>
  );
}
