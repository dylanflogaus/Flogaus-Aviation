import { useEffect, useRef, useState } from "react";
import { readViteEnv } from "../config/env";
import { INTRO_FLIGHT_CAL_PATH } from "../config/site";

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

type CalEmbedProps = {
  preset?: "intro-flight";
};

export function CalEmbed({ preset }: CalEmbedProps) {
  const defaultLink = normalizeCalLink(readViteEnv("VITE_CAL_LINK"));
  const calLink =
    preset === "intro-flight"
      ? normalizeCalLink(readViteEnv("VITE_CAL_INTRO_LINK") || INTRO_FLIGHT_CAL_PATH)
      : defaultLink;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isNarrow, setIsNarrow] = useState(false);
  const [mobileHeightPx, setMobileHeightPx] = useState<number | null>(null);

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
  }, [isNarrow]);

  if (!calLink) {
    return (
      <div className="cal-placeholder card">
        <p>
          Set <code>VITE_CAL_LINK</code> in a <code>.env</code> file (see <code>.env.example</code>). Use your
          Cal.com path, for example <code>dflogaus/intro-flight</code> or a full{" "}
          <code>https://cal.com/…</code> URL.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Connect Stripe in your Cal.com dashboard for paid event types; payments run through Cal, not on this
          site.
        </p>
      </div>
    );
  }

  const src = buildEmbedUrl(calLink);

  return (
    <div className="cal-embed-wrap">
      <iframe
        ref={iframeRef}
        title="Schedule with Flogaus Aviation — Cal.com"
        src={src}
        allow="payment *"
        scrolling={isNarrow ? "no" : undefined}
        style={isNarrow && mobileHeightPx != null ? { height: `${mobileHeightPx}px` } : undefined}
      />
    </div>
  );
}
