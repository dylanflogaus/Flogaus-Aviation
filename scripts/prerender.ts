import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";
import { renderSeoHeadBlock } from "../src/seo/renderSeoHead";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const indexPath = path.join(distDir, "index.html");

const PRERENDER_ROUTES: { url: string; outFile: string }[] = [
  { url: "/", outFile: "index.html" },
  { url: "/about", outFile: "about.html" },
  { url: "/contact", outFile: "contact.html" },
  { url: "/booking", outFile: "booking.html" },
  { url: "/flight-instruction-n57", outFile: "flight-instruction-n57.html" },
  { url: "/404", outFile: "404.html" },
];

function injectTemplate(template: string, url: string, appHtml: string): string {
  const seoBlock = renderSeoHeadBlock(url);
  let html = template.replace(
    /<!-- SEO_START -->[\s\S]*?<!-- SEO_END -->/,
    `<!-- SEO_START -->\n${seoBlock}\n    <!-- SEO_END -->`,
  );
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );
  return html;
}

function renderRoute(url: string): string {
  return renderToString(
    React.createElement(
      StaticRouter,
      { location: url },
      React.createElement(App),
    ),
  );
}

if (!fs.existsSync(indexPath)) {
  console.error("Missing dist/index.html — run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(indexPath, "utf8");

for (const { url, outFile } of PRERENDER_ROUTES) {
  const appHtml = renderRoute(url);
  const html = injectTemplate(template, url, appHtml);
  fs.writeFileSync(path.join(distDir, outFile), html, "utf8");
  console.log(`Prerendered ${url} → ${outFile}`);
}
