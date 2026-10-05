import {
  FLIGHT_LESSON_CAL_PATH,
  GROUND_LESSON_CAL_PATH,
  INTRO_FLIGHT_CAL_PATH,
} from "./site";

export type BookingEventId = "intro-flight" | "flight-lesson" | "ground-lesson";

export type BookingEventConfig = {
  id: BookingEventId;
  title: string;
  priceLabel: string;
  durationLabel: string;
  defaultCalPath: string;
};

export const BOOKING_EVENTS: readonly BookingEventConfig[] = [
  {
    id: "intro-flight",
    title: "Intro Flight",
    priceLabel: "Free",
    durationLabel: "60 min",
    defaultCalPath: INTRO_FLIGHT_CAL_PATH,
  },
  {
    id: "flight-lesson",
    title: "Flight Lesson",
    priceLabel: "$70/hr",
    durationLabel: "60 min",
    defaultCalPath: FLIGHT_LESSON_CAL_PATH,
  },
  {
    id: "ground-lesson",
    title: "Ground Lesson",
    priceLabel: "$60/hr",
    durationLabel: "60 min",
    defaultCalPath: GROUND_LESSON_CAL_PATH,
  },
] as const;

export const DEFAULT_BOOKING_EVENT: BookingEventId = "intro-flight";

export function parseBookingEventId(raw: string | null): BookingEventId {
  if (raw === "flight-lesson" || raw === "ground-lesson") return raw;
  return DEFAULT_BOOKING_EVENT;
}

export const BOOKING_SCHEDULING_NOTE =
  "Booking is free — no card needed. You pay after each lesson.";
