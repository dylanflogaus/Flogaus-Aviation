import Cal from "@calcom/embed-react";

const DEFAULT_CAL_ORIGIN = "https://cal.com";

/** Map VITE_CAL_LINK (path or full URL) to props for the official Cal inline embed (handles height via postMessage). */
function calPropsFromEnv(raw: string): { calLink: string; calOrigin?: string } {
  const trimmed = raw.trim();
  try {
    if (/^https?:\/\//i.test(trimmed)) {
      const url = new URL(trimmed);
      const path = url.pathname.replace(/^\//, "").replace(/\/$/, "");
      const calLink = path + url.search;
      return { calLink, calOrigin: url.origin };
    }
  } catch {
    // use path-style value below
  }
  return {
    calLink: trimmed.replace(/^\//, ""),
    calOrigin: DEFAULT_CAL_ORIGIN,
  };
}

export function CalEmbed() {
  const raw = import.meta.env.VITE_CAL_LINK?.trim();

  if (!raw) {
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

  const { calLink, calOrigin } = calPropsFromEnv(raw);

  return (
    <Cal
      className="cal-embed-wrap"
      calLink={calLink}
      calOrigin={calOrigin}
      config={{
        theme: "dark",
        iframeAttrs: {
          title: "Schedule with Flogaus Aviation — Cal.com",
          allow: "payment *",
        },
      }}
    />
  );
}
