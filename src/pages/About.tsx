import { Link } from "react-router-dom";
import { INSTRUCTOR_CREDENTIALS } from "../config/credentials";
import { SERVICE_AREA_PHRASE } from "../config/site";

export function About() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">About Flogaus Aviation</h1>
          <p className="page-header__lede">
            Calm, structured flight instruction {SERVICE_AREA_PHRASE} — experience,
            patience, and high standards without the ego.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container about-grid">
          <div>
            <h2>Instruction philosophy</h2>
            <p>
              Good training feels boring when it is done right: predictable flows, early stabilization, and crisp
              corrections. I teach pilots to think in altitude, energy, and options so the airplane goes where you
              intend, even when the plan changes.
            </p>
            <p>
              Whether you are working toward a private certificate, knocking off rust after a hiatus, or getting
              checkride-ready, we will build a syllabus around your timeline and goals.
            </p>
            <h2 className="section-heading-spaced">Background</h2>
            <p>
              I am a Certified Flight Instructor (CFI) with nearly 300 hours of flight time, plus Commercial and
              Instrument pilot certificates and a First Class medical. I trained under Part 141 at flyGateway and
              Part 61 at New Garden Flying Field, and I studied Mechanical Engineering at the University of Delaware.
            </p>
            <p>
              I may not have thousands of hours, but that is an advantage for you: I recently passed the same
              checkrides you are preparing for. The knowledge is fresh, and I remember exactly what it is like to
              learn these skills.
            </p>
            <p>
              My goal is simple: help you become a safe, confident, and competent pilot — whether you are working on
              your private certificate, returning after time away, or polishing maneuvers before a practical test.
            </p>
            <ul className="credential-list credential-list--compact">
              {INSTRUCTOR_CREDENTIALS.map(({ label, date }) => (
                <li key={label}>
                  <strong>{label}</strong>
                  <span>{date}</span>
                </li>
              ))}
            </ul>
            <p>You bring the motivation. I will bring the instruction, patience, and a safety-first mindset.</p>
          </div>
          <figure className="about-photo">
            <img
              src="/instructor-portrait.jpeg"
              alt="Flogaus Aviation flight instructor portrait"
              width={560}
              height={700}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>
      <section className="section section--tight" aria-labelledby="about-cta-heading">
        <div className="container">
          <div className="callout">
            <div>
              <p className="callout__eyebrow">Ready to train?</p>
              <h2 id="about-cta-heading">Start with a free Intro Flight</h2>
              <p>Meet your instructor, talk through your goals, and see if the coaching style is a fit.</p>
            </div>
            <div className="hero__actions callout__actions">
              <Link to="/booking?event=intro-flight" className="btn btn--primary">
                Book a free Intro Flight
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Contact the instructor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
