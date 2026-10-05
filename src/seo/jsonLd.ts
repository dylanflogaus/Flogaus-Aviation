import {
  HOME_AIRPORT_TBD,
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
    description: `Structured, safety-first flight instruction in the Wilmington, DE area near ${HOME_AIRPORT_TBD}.`,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Wilmington, DE area" },
      { "@type": "Place", name: HOME_AIRPORT_TBD },
    ],
  };
}

export function buildN57ServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/flight-instruction-n57#service`,
    name: "Flight instruction near New Garden Flying Field (N57)",
    serviceType: "Flight instruction",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: [
      { "@type": "Place", name: "New Garden Flying Field (N57)" },
      { "@type": "Place", name: "Toughkenamon, Pennsylvania" },
      { "@type": "Place", name: "Kennett Square area" },
    ],
    url: `${SITE_URL}/flight-instruction-n57`,
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
  if (path === "/flight-instruction-n57") {
    graphs.push(buildN57ServiceJsonLd());
  }
  if (path !== "/") {
    const crumb = buildBreadcrumbJsonLd(path);
    if (crumb) graphs.push(crumb);
  }
  return graphs;
}
