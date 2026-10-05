import {
  SEO_LOCATION_DESCRIPTION,
  SEO_LOCATION_TITLE,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
} from "../config/site";
import type { RouteSeo } from "./types";
import { normalizePathname } from "./normalizePath";

export const ROUTE_SEO: Record<string, RouteSeo> = {
  "/": {
    title: `Flight Instructor ${SEO_LOCATION_TITLE} | ${SITE_NAME}`,
    description: `FAA-certified flight instruction ${SEO_LOCATION_DESCRIPTION}. Calm, structured, one-on-one training with clear lesson plans. Book a free Intro Flight.`,
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
    title: `About ${SITE_NAME} | Flight Instructor ${SEO_LOCATION_TITLE}`,
    description: `Learn about ${SITE_NAME}'s calm, structured approach to flight training ${SEO_LOCATION_DESCRIPTION}.`,
    path: "/about",
    canonical: `${SITE_URL}/about`,
    robots: "index,follow",
  },
  "/contact": {
    title: `Contact a Flight Instructor ${SEO_LOCATION_TITLE} | ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} for flight instruction ${SEO_LOCATION_DESCRIPTION}. Call ${SITE_PHONE} or email ${SITE_EMAIL}.`,
    path: "/contact",
    canonical: `${SITE_URL}/contact`,
    robots: "index,follow",
  },
  "/booking": {
    title: `Book Flight Instruction ${SEO_LOCATION_TITLE} | ${SITE_NAME}`,
    description: `Schedule online at no cost — no card required. Intro Flight is free; instructor rates are paid after each lesson. ${SITE_NAME} ${SEO_LOCATION_DESCRIPTION}.`,
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
