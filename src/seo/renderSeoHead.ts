import { OG_IMAGE_URL, SITE_NAME, SITE_URL } from "../config/site";
import { buildJsonLdForPath } from "./jsonLd";
import { resolveRouteSeo } from "./routeMeta";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(text: string): string {
  return escapeHtml(text);
}

export function renderSeoHeadBlock(pathname: string): string {
  const seo = resolveRouteSeo(pathname);
  const canonical = seo.canonical ?? `${SITE_URL}${seo.path === "/" ? "" : seo.path}`;
  const jsonLd = buildJsonLdForPath(pathname);

  const lines = [
    `    <title data-seo="title">${escapeHtml(seo.title)}</title>`,
    `    <meta data-seo="description" name="description" content="${escapeAttr(seo.description)}" />`,
    `    <meta data-seo="robots" name="robots" content="${seo.robots}" />`,
    ...(seo.robots === "index,follow"
      ? [`    <link data-seo="canonical" rel="canonical" href="${escapeAttr(canonical)}" />`]
      : []),
    `    <meta data-seo="og:title" property="og:title" content="${escapeAttr(seo.title)}" />`,
    `    <meta data-seo="og:description" property="og:description" content="${escapeAttr(seo.description)}" />`,
    `    <meta data-seo="og:type" property="og:type" content="website" />`,
    `    <meta data-seo="og:url" property="og:url" content="${escapeAttr(canonical)}" />`,
    `    <meta data-seo="og:site_name" property="og:site_name" content="${escapeAttr(SITE_NAME)}" />`,
    `    <meta data-seo="og:image" property="og:image" content="${escapeAttr(OG_IMAGE_URL)}" />`,
    `    <meta data-seo="og:image:type" property="og:image:type" content="image/png" />`,
    `    <meta data-seo="og:image:width" property="og:image:width" content="1200" />`,
    `    <meta data-seo="og:image:height" property="og:image:height" content="630" />`,
    `    <meta data-seo="twitter:card" name="twitter:card" content="summary_large_image" />`,
    `    <meta data-seo="twitter:title" name="twitter:title" content="${escapeAttr(seo.title)}" />`,
    `    <meta data-seo="twitter:description" name="twitter:description" content="${escapeAttr(seo.description)}" />`,
    `    <meta data-seo="twitter:image" name="twitter:image" content="${escapeAttr(OG_IMAGE_URL)}" />`,
    `    <script data-seo="jsonld" type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  ];

  return lines.join("\n");
}
