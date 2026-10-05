import { Link, useSearchParams } from "react-router-dom";
import { CalEmbed } from "../components/CalEmbed";
import { PAYMENT_POLICY } from "../config/site";

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
              ? "Pick a time for your free Intro Flight. Scheduling is free — no card required."
              : "Pick a time that fits your calendar. Scheduling is free — no card required."}
          </p>
          <p className="page-header__lede" style={{ marginTop: "1rem" }}>
            {PAYMENT_POLICY}
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
