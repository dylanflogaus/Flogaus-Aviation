import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { InstructorPortrait } from "../components/InstructorPortrait";
import { INSTRUCTOR_CREDENTIALS } from "../config/credentials";
import {
  FLIGHT_DUAL_INSTRUCTION_RATE,
  GROUND_INSTRUCTION_RATE,
  PAYMENT_POLICY,
  SERVICE_AREA_PHRASE,
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
                Book online, receive reminders, and reschedule when life happens. Scheduling is free and no card is
                required.
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
              <InstructorPortrait />
            </figure>
            <div className="trust-grid__copy">
              <p>
                I am an FAA Certified Flight Instructor training {SERVICE_AREA_PHRASE}. I earned my certificates
                through Part 141 training at flyGateway and Part 61 training in the region, and I studied Mechanical
                Engineering at the University of Delaware.
              </p>
              <p>
                Expect calm, structured, one-on-one instruction with clear lesson plans and honest feedback. I hold
                a First Class medical and train primarily in G1000-equipped aircraft.
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
          <h2 id="pricing-heading">Instructor rates</h2>
          <p className="section__lede">{PAYMENT_POLICY}</p>
          <div className="pricing-table" role="table" aria-label="Instructor rates">
            <div className="pricing-table__row pricing-table__row--head" role="row">
              <span role="columnheader">Service</span>
              <span role="columnheader">Instructor rate</span>
            </div>
            <div className="pricing-table__row" role="row">
              <span role="cell">Intro Flight</span>
              <span role="cell">
                <strong>Free</strong>
              </span>
            </div>
            <div className="pricing-table__row" role="row">
              <span role="cell">Flight (dual) instruction</span>
              <span role="cell">
                <strong>{FLIGHT_DUAL_INSTRUCTION_RATE}</strong>
              </span>
            </div>
            <div className="pricing-table__row" role="row">
              <span role="cell">Ground instruction</span>
              <span role="cell">
                <strong>{GROUND_INSTRUCTION_RATE}</strong>
              </span>
            </div>
          </div>
          <div className="hero__actions" style={{ marginTop: "2rem" }}>
            <Link to="/booking?event=intro-flight" className="btn btn--primary">
              Book a free Intro Flight
            </Link>
            <Link to="/booking?event=flight-lesson" className="btn btn--ghost">
              Book a lesson
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
