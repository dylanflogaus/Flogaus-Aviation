import {
  HOME_AIRPORT_TBD,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
} from "../config/site";
import type { RouteSeo } from "./types";
import { normalizePathname } from "./normalizePath";

const areaPhrase = `Wilmington, DE area near ${HOME_AIRPORT_TBD}`;

export const ROUTE_SEO: Record<string, RouteSeo> = {
  "/": {
    title: `Flight Instructor · ${areaPhrase} | ${SITE_NAME}`,
    description: `FAA-certified flight instruction in the ${areaPhrase}. Private, recurrent, and checkride-ready training with a calm, structured CFI. Book a free Intro Flight.`,
    path: "/",
    canonical: SITE_URL,
    robots: "index,follow",
  },
  "/flight-instruction-n57": {
    title: `Flight Instruction Near N57 in Toughkenamon, PA | ${SITE_NAME}`,
    description:
      "Structured, safety-first flight instruction near New Garden Flying Field (N57) in Toughkenamon, Pennsylvania, with convenient access for Kennett Square-area pilots.",
    path: "/flight-instruction-n57",
    canonical: `${SITE_URL}/flight-instruction-n57`,
    robots: "index,follow",
  },
  "/about": {
    title: `About ${SITE_NAME} | Flight Instructor · Wilmington, DE area`,
    description: `Learn about ${SITE_NAME}'s calm, structured approach to flight training in the ${areaPhrase}.`,
    path: "/about",
    canonical: `${SITE_URL}/about`,
    robots: "index,follow",
  },
  "/contact": {
    title: `Contact a Flight Instructor · Wilmington, DE area | ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} for flight instruction in the ${areaPhrase}. Call ${SITE_PHONE} or email ${SITE_EMAIL}.`,
    path: "/contact",
    canonical: `${SITE_URL}/contact`,
    robots: "index,follow",
  },
  "/booking": {
    title: `Book Flight Instruction · Wilmington, DE area | ${SITE_NAME}`,
    description: `Schedule a free Intro Flight or flight instruction session with ${SITE_NAME} using online booking.`,
    path: "/booking",
    canonical: `${SITE_URL}/booking`,
    robots: "index,follow",
  },
};

export const NOT_FOUND_SEO: RouteSeo = {
  title: `Page Not Found | ${SITE_NAME}`,
  description: "The requested Flogaus Aviation page could not be found.",
  path: "/404",
  robots: "noindex,nofollow",
};

const BREADCRUMB_LABELS: Record<string, string> = {
  "/about": "About",
  "/contact": "Contact",
  "/booking": "Book instruction",
  "/flight-instruction-n57": "Flight instruction near N57",
};

export function resolveRouteSeo(pathname: string): RouteSeo {
  const path = normalizePathname(pathname);
  return ROUTE_SEO[path] ?? { ...NOT_FOUND_SEO, path };
}

export function breadcrumbLabel(path: string): string | undefined {
  return BREADCRUMB_LABELS[path];
}
