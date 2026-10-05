import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { OG_IMAGE_URL, SITE_NAME, SITE_URL } from "../config/site";
import { buildJsonLdForPath } from "./jsonLd";
import { resolveRouteSeo } from "./routeMeta";

function setMeta(key: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[data-seo="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.dataset.seo = key;
    document.head.appendChild(el);
  }
  for (const [name, value] of Object.entries(attrs)) {
    el.setAttribute(name, value);
  }
}

function setCanonical(href: string | null) {
  const existing = document.head.querySelector<HTMLLinkElement>('link[data-seo="canonical"]');
  if (!href) {
    existing?.remove();
    return;
  }
  const link = existing ?? document.createElement("link");
  link.dataset.seo = "canonical";
  link.rel = "canonical";
  link.href = href;
  if (!existing) document.head.appendChild(link);
}

function setJsonLd(data: unknown[]) {
  let script = document.head.querySelector<HTMLScriptElement>('script[data-seo="jsonld"]');
  if (!script) {
    script = document.createElement("script");
    script.dataset.seo = "jsonld";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function PageSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = resolveRouteSeo(pathname);
    const canonical = seo.canonical ?? `${SITE_URL}${seo.path === "/" ? "" : seo.path}`;

    document.title = seo.title;
    setMeta("description", { name: "description", content: seo.description });
    setMeta("robots", { name: "robots", content: seo.robots });
    setCanonical(seo.robots === "index,follow" ? canonical : null);

    setMeta("og:title", { property: "og:title", content: seo.title });
    setMeta("og:description", { property: "og:description", content: seo.description });
    setMeta("og:type", { property: "og:type", content: "website" });
    setMeta("og:url", { property: "og:url", content: canonical });
    setMeta("og:site_name", { property: "og:site_name", content: SITE_NAME });
    setMeta("og:image", { property: "og:image", content: OG_IMAGE_URL });
    setMeta("og:image:type", { property: "og:image:type", content: "image/png" });
    setMeta("og:image:width", { property: "og:image:width", content: "1200" });
    setMeta("og:image:height", { property: "og:image:height", content: "630" });

    setMeta("twitter:card", { name: "twitter:card", content: "summary_large_image" });
    setMeta("twitter:title", { name: "twitter:title", content: seo.title });
    setMeta("twitter:description", { name: "twitter:description", content: seo.description });
    setMeta("twitter:image", { name: "twitter:image", content: OG_IMAGE_URL });

    setJsonLd(buildJsonLdForPath(pathname));
  }, [pathname]);

  return null;
}
