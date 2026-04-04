function buildEmbedUrl(calLink: string): string {
  const trimmed = calLink.trim();
  const base = trimmed.startsWith("http")
    ? trimmed.replace(/\/$/, "")
    : `https://cal.com/${trimmed.replace(/^\//, "")}`;
  const hasQuery = base.includes("?");
  return `${base}${hasQuery ? "&" : "?"}embed=true`;
}

export function CalEmbed() {
  const calLink = import.meta.env.VITE_CAL_LINK?.trim();

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

  return (
    <div className="cal-embed-wrap">
      <iframe
        title="Schedule with Flogaus Aviation — Cal.com"
        src={src}
        allow="payment *"
        scrolling="no"
      />
    </div>
  );
}
