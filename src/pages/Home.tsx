import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { INSTRUCTOR_CREDENTIALS } from "../config/credentials";
import {
  FLIGHT_LESSON_RATE_PLACEHOLDER,
  GROUND_LESSON_RATE_PLACEHOLDER,
  HOME_AIRPORT_TBD,
} from "../config/site";

export function Home() {
  return (
    <>
      <Hero />
      <section className="section section--tight" aria-labelledby="why-heading">
        <div className="container">
          <h2 id="why-heading">Why train with me</h2>
          <p style={{ maxWidth: "40rem", marginBottom: "2rem" }}>
            I combine disciplined lesson planning with a calm, supportive cockpit so you build habit patterns that
            hold up when things get busy.
          </p>
          <div className="card-grid">
            <article className="card">
              <h3>Clear progression</h3>
              <p>
                Every session has defined objectives and debrief points. You always know where you stand relative to
                checkride or proficiency standards.
              </p>
            </article>
            <article className="card">
              <h3>Decision-quality training</h3>
              <p>
                Weather, systems, and emergencies are framed as structured problems so judgment improves alongside
                stick-and-rudder skill.
              </p>
            </article>
            <article className="card">
              <h3>Respect for your schedule</h3>
              <p>
                Book online, receive reminders, and reschedule when life happens. Paid sessions are handled securely
                through Cal.com and Stripe.
              </p>
            </article>
          </div>
        </div>
      </section>
      <hr className="gold-rule" />
      <section className="section" aria-labelledby="trust-heading">
        <div className="container">
          <h2 id="trust-heading">Your instructor</h2>
          <div className="trust-grid">
            <figure className="about-photo trust-grid__photo">
              <img
                src="/instructor-portrait.webp"
                alt="Flogaus Aviation flight instructor portrait"
                width={560}
                height={700}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="trust-grid__copy">
              <p>
                I am an FAA Certified Flight Instructor based in the Wilmington, DE area, training near{" "}
                {HOME_AIRPORT_TBD}. I earned my certificates through Part 141 training at flyGateway and Part 61
                training at New Garden Flying Field, and I studied Mechanical Engineering at the University of
                Delaware.
              </p>
              <p>
                I recently passed the same checkrides you are working toward, so the standards, ACS language, and
                study habits are still fresh. I hold a First Class medical and train primarily in G1000-equipped
                aircraft.
              </p>
              <ul className="credential-list">
                {INSTRUCTOR_CREDENTIALS.map(({ label, date }) => (
                  <li key={label}>
                    <strong>{label}</strong>
                    <span>{date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr className="gold-rule" />
      <section className="section section--tight" aria-labelledby="pricing-heading">
        <div className="container content-measure">
          <h2 id="pricing-heading">Rates</h2>
          <p className="section__lede">
            Aircraft rental is billed separately by the rental provider. Instruction rates below are placeholders
            until Dylan confirms final numbers.
          </p>
          <div className="pricing-table" role="table" aria-label="Instruction rates">
            <div className="pricing-table__row pricing-table__row--head" role="row">
              <span role="columnheader">Service</span>
              <span role="columnheader">Rate</span>
            </div>
            <div className="pricing-table__row" role="row">
              <span role="cell">Intro Flight</span>
              <span role="cell">
                <strong>Free</strong>
              </span>
            </div>
            <div className="pricing-table__row" role="row">
              <span role="cell">Flight instruction</span>
              <span role="cell">
                <strong>{FLIGHT_LESSON_RATE_PLACEHOLDER}</strong>
              </span>
            </div>
            <div className="pricing-table__row" role="row">
              <span role="cell">Ground instruction</span>
              <span role="cell">
                <strong>{GROUND_LESSON_RATE_PLACEHOLDER}</strong>
              </span>
            </div>
          </div>
          <div className="hero__actions" style={{ marginTop: "2rem" }}>
            <Link to="/booking?event=intro-flight" className="btn btn--primary">
              Book a free Intro Flight
            </Link>
          </div>
        </div>
      </section>
      <hr className="gold-rule" />
      <section className="section section--tight" aria-labelledby="local-link-heading">
        <div className="container content-measure">
          <h2 id="local-link-heading">Also training near New Garden (N57)</h2>
          <p>
            If you fly near Toughkenamon or Kennett Square, see the dedicated page for flight instruction near New
            Garden Flying Field (N57).
          </p>
          <div className="hero__actions">
            <Link to="/flight-instruction-n57" className="btn btn--ghost">
              Flight instruction near N57
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
