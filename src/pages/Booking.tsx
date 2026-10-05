import { Link, useSearchParams } from "react-router-dom";
import { CalEmbed } from "../components/CalEmbed";

export function Booking() {
  const [params] = useSearchParams();
  const event = params.get("event");

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Book instruction</h1>
          <p className="page-header__lede">
            {event === "intro-flight"
              ? "Choose a time for your free Intro Flight. Paid lessons are also available — checkout runs through Cal.com and Stripe when required."
              : "Choose a time that fits your calendar. Scheduling runs on Cal.com. If an event type requires payment, Stripe is handled inside Cal — you will complete checkout there, not on this website."}
          </p>
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
          <CalEmbed preset={event === "intro-flight" ? "intro-flight" : undefined} />
        </div>
      </section>
    </>
  );
}
