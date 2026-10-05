import { useEffect, useRef, useState } from "react";
import { readViteEnv } from "../config/env";
import type { BookingEventId } from "../config/booking";
import {
  FLIGHT_LESSON_CAL_PATH,
  GROUND_LESSON_CAL_PATH,
  INTRO_FLIGHT_CAL_PATH,
} from "../config/site";

function normalizeCalLink(raw: string): string {
  return raw.trim().replace(/^['"]+|['"]+$/g, "").trim();
}

function buildEmbedUrl(calLink: string): string {
  const trimmed = normalizeCalLink(calLink);
  const base = trimmed.startsWith("http")
    ? trimmed.replace(/\/$/, "")
    : `https://cal.com/${trimmed.replace(/^\//, "")}`;
  const hasQuery = base.includes("?");
  return `${base}${hasQuery ? "&" : "?"}embed=true`;
}

const MOBILE_MEDIA = "(max-width: 767px)";

function calDimensionHeight(payload: unknown): number | null {
  if (typeof payload !== "object" || payload === null) return null;
  const o = payload as Record<string, unknown>;
  if (o.originator !== "CAL" || o.type !== "__dimensionChanged") return null;
  const data = o.data;
  if (typeof data !== "object" || data === null) return null;
  const h = (data as Record<string, unknown>).iframeHeight;
  if (typeof h !== "number" || !Number.isFinite(h) || h < 1) return null;
  return Math.ceil(h);
}

function resolveCalLink(preset: BookingEventId): string {
  switch (preset) {
    case "intro-flight":
      return normalizeCalLink(readViteEnv("VITE_CAL_INTRO_LINK") || INTRO_FLIGHT_CAL_PATH);
    case "flight-lesson":
      return normalizeCalLink(readViteEnv("VITE_CAL_FLIGHT_LINK") || FLIGHT_LESSON_CAL_PATH);
    case "ground-lesson":
      return normalizeCalLink(readViteEnv("VITE_CAL_GROUND_LINK") || GROUND_LESSON_CAL_PATH);
  }
}

type CalEmbedProps = {
  preset: BookingEventId;
};

export function CalEmbed({ preset }: CalEmbedProps) {
  const [embedReady, setEmbedReady] = useState(false);
  const calLink = resolveCalLink(preset);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isNarrow, setIsNarrow] = useState(false);
  const [mobileHeightPx, setMobileHeightPx] = useState<number | null>(null);

  useEffect(() => {
    setEmbedReady(true);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_MEDIA);
    const apply = () => setIsNarrow(mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!isNarrow) {
      setMobileHeightPx(null);
      return;
    }

    const onMessage = (event: MessageEvent) => {
      if (event.source !== iframeRef.current?.contentWindow) return;
      const h = calDimensionHeight(event.data);
      if (h === null) return;
      setMobileHeightPx(h + 2);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [isNarrow, preset]);

  if (!calLink) {
    return (
      <div className="cal-placeholder card">
        <p>
          Cal.com paths are missing. Set <code>VITE_CAL_INTRO_LINK</code>, <code>VITE_CAL_FLIGHT_LINK</code>, and{" "}
          <code>VITE_CAL_GROUND_LINK</code> in <code>.env</code> (see <code>.env.example</code>), or rely on the
          defaults such as <code>dflogaus/intro-flight</code>.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Scheduling only — no online payment on this site. Lesson fees are paid directly to your instructor after
          each session.
        </p>
      </div>
    );
  }

  if (!embedReady) {
    return (
      <div className="cal-embed-wrap cal-embed-wrap--loading" aria-busy="true" aria-live="polite">
        <p className="cal-embed-loading">Loading scheduler…</p>
      </div>
    );
  }

  const src = buildEmbedUrl(calLink);

  return (
    <div className="cal-embed-wrap">
      <iframe
        key={preset}
        ref={iframeRef}
        title="Schedule with Flogaus Aviation — Cal.com"
        src={src}
        scrolling={isNarrow ? "no" : undefined}
        style={isNarrow && mobileHeightPx != null ? { height: `${mobileHeightPx}px` } : undefined}
      />
    </div>
  );
}
