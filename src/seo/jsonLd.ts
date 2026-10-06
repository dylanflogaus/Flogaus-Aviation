import {
  SERVICE_AREA_SURROUNDING,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
} from "../config/site";
import { breadcrumbLabel, resolveRouteSeo } from "./routeMeta";
import { normalizePathname } from "./normalizePath";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    description: `Structured, safety-first flight instruction in the ${SERVICE_AREA_SURROUNDING}. Students may use their own aircraft or a rental when available; airport confirmed after booking.`,
    areaServed: [{ "@type": "AdministrativeArea", name: SERVICE_AREA_SURROUNDING }],
  };
}

function buildBreadcrumbJsonLd(path: string) {
  const label = breadcrumbLabel(path);
  if (!label) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: SITE_URL },
      { "@type": "ListItem", position: 2, name: label, item: `${SITE_URL}${path}` },
    ],
  };
}

export function buildJsonLdForPath(pathname: string): unknown[] {
  const path = normalizePathname(pathname);
  const seo = resolveRouteSeo(path);
  if (seo.robots === "noindex,nofollow") {
    return [];
  }

  const graphs: unknown[] = [buildLocalBusinessJsonLd()];
  if (path !== "/") {
    const crumb = buildBreadcrumbJsonLd(path);
    if (crumb) graphs.push(crumb);
  }
  return graphs;
}
