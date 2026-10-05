import { Link, useSearchParams } from "react-router-dom";
import { CalEmbed } from "../components/CalEmbed";
import { LessonPicker } from "../components/LessonPicker";
import { parseBookingEventId } from "../config/booking";

const EVENT_LEDE: Record<
  ReturnType<typeof parseBookingEventId>,
  string
> = {
  "intro-flight": "Pick a time for your free Intro Flight.",
  "flight-lesson": "Pick a time for dual flight instruction in the aircraft.",
  "ground-lesson": "Pick a time for ground instruction — briefings, test prep, or knowledge review.",
};

export function Booking() {
  const [params] = useSearchParams();
  const event = parseBookingEventId(params.get("event"));

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Book instruction</h1>
          <p className="page-header__lede">{EVENT_LEDE[event]}</p>
          {event !== "intro-flight" ? (
            <p className="page-header__lede" style={{ marginTop: "1rem" }}>
              New here?{" "}
              <Link to="/booking?event=intro-flight">Book a free Intro Flight</Link> first.
            </p>
          ) : null}
        </div>
      </header>
      <section className="section section--tight">
        <div className="container">
          <LessonPicker />
          <CalEmbed preset={event} />
        </div>
      </section>
    </>
  );
}
