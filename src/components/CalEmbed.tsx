import { useEffect, useRef, useState } from "react";

function normalizeCalLink(raw: string): string {
  // Cloud providers sometimes store quoted env values; strip wrapper quotes safely.
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

/** Height Cal.com sends for the embedded document; keep in sync with their embed iframe messaging. */
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

export function CalEmbed() {
  const rawCalLink = import.meta.env.VITE_CAL_LINK;
  const calLink = normalizeCalLink(rawCalLink ?? "");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isNarrow, setIsNarrow] = useState(false);
  const [mobileHeightPx, setMobileHeightPx] = useState<number | null>(null);

  useEffect(() => {
    // #region agent log
    fetch("http://127.0.0.1:7935/ingest/1808c6c5-276e-416d-b32e-fdb6e1b4122d", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "0e7e4f" },
      body: JSON.stringify({
        sessionId: "0e7e4f",
        runId: "pre-fix",
        hypothesisId: "H3",
        location: "src/components/CalEmbed.tsx:34",
        message: "CalEmbed mounted",
        data: {
          pathname: window.location.pathname,
          mode: import.meta.env.MODE,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, []);

  useEffect(() => {
    // #region agent log
    fetch("http://127.0.0.1:7935/ingest/1808c6c5-276e-416d-b32e-fdb6e1b4122d", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "0e7e4f" },
      body: JSON.stringify({
        sessionId: "0e7e4f",
        runId: "pre-fix",
        hypothesisId: "H1_H2_H4",
        location: "src/components/CalEmbed.tsx:54",
        message: "Cal env snapshot",
        data: {
          hasRawCalLink: typeof rawCalLink === "string",
          rawCalLinkLength: typeof rawCalLink === "string" ? rawCalLink.length : null,
          normalizedCalLinkLength: calLink.length,
          normalizedCalLinkPreview: calLink.slice(0, 120),
          viteKeys: Object.keys(import.meta.env).filter((k) => k.startsWith("VITE_")),
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [rawCalLink, calLink]);

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
      // Small buffer avoids 1px clipping from rounding/theme borders inside Cal.
      setMobileHeightPx(h + 2);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [isNarrow]);

  useEffect(() => {
    if (calLink) return;
    // #region agent log
    fetch("http://127.0.0.1:7935/ingest/1808c6c5-276e-416d-b32e-fdb6e1b4122d", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "0e7e4f" },
      body: JSON.stringify({
        sessionId: "0e7e4f",
        runId: "pre-fix",
        hypothesisId: "H1_H2",
        location: "src/components/CalEmbed.tsx:93",
        message: "Fallback branch active: missing calLink",
        data: {
          hasRawCalLink: typeof rawCalLink === "string",
          normalizedCalLinkLength: calLink.length,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [rawCalLink, calLink]);

  if (!calLink) {
    return (
      <div className="cal-placeholder card">
        <p>
          Set <code>VITE_CAL_LINK</code> in a <code>.env</code> file (see <code>.env.example</code>). Use
          your Cal.com path, for example{" "}
          <code>yourusername/discovery-call</code> or a full <code>https://cal.com/…</code> URL.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Connect Stripe in your Cal.com dashboard for paid event types; payments run through Cal, not on this
          site.
        </p>
      </div>
    );
  }

  const src = buildEmbedUrl(calLink);

  useEffect(() => {
    // #region agent log
    fetch("http://127.0.0.1:7935/ingest/1808c6c5-276e-416d-b32e-fdb6e1b4122d", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "0e7e4f" },
      body: JSON.stringify({
        sessionId: "0e7e4f",
        runId: "pre-fix",
        hypothesisId: "H5",
        location: "src/components/CalEmbed.tsx:124",
        message: "Embed branch active: iframe src built",
        data: {
          srcPreview: src.slice(0, 160),
          isNarrow,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [src, isNarrow]);

  return (
    <div className="cal-embed-wrap">
      <iframe
        ref={iframeRef}
        title="Schedule with Flogaus Aviation — Cal.com"
        src={src}
        allow="payment *"
        scrolling={isNarrow ? "no" : undefined}
        style={
          isNarrow && mobileHeightPx != null ? { height: `${mobileHeightPx}px` } : undefined
        }
      />
    </div>
  );
}
