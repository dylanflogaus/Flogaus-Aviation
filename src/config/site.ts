export const SITE_URL = "https://flogausaviation.com";
export const SITE_NAME = "Flogaus Aviation";
export const SITE_EMAIL = "info@flogausaviation.com";
export const SITE_PHONE = "+13023795071";
export const SITE_PHONE_DISPLAY = "+1 (302) 379-5071";
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const HOME_AIRPORT_NAME = "New Garden Flying Field (N57)";
export const HOME_AIRPORT_LOCALITY = "Toughkenamon, PA";

/** Body copy: Wilmington framing + home airport (mid-sentence). */
export const SERVICE_AREA_PHRASE = `near ${HOME_AIRPORT_NAME}, serving the Wilmington, DE area`;

/** Same as SERVICE_AREA_PHRASE, sentence-initial capitalization. */
export const SERVICE_AREA_LINE = `Near ${HOME_AIRPORT_NAME}, serving the Wilmington, DE area`;

/** SEO titles: airport first, then Wilmington (mid-title). */
export const SEO_LOCATION_TITLE = `near ${HOME_AIRPORT_NAME} · Wilmington, DE`;

/** SEO meta descriptions: natural mid-sentence area phrasing. */
export const SEO_LOCATION_DESCRIPTION = `near ${HOME_AIRPORT_NAME}, serving the Wilmington, DE area`;

export const INTRO_FLIGHT_CAL_PATH = "dflogaus/intro-flight";

export const FLIGHT_DUAL_INSTRUCTION_RATE = "$70/hr";
export const GROUND_INSTRUCTION_RATE = "$60/hr";

/** User-facing payment and booking policy (no online checkout). */
export const PAYMENT_POLICY =
  `Online booking is free and no card is required. The Intro Flight is free. Flight (dual) instruction is ${FLIGHT_DUAL_INSTRUCTION_RATE} and ground instruction is ${GROUND_INSTRUCTION_RATE} (instructor rates), paid directly to Dylan after each lesson. Aircraft rental is billed separately.`;
