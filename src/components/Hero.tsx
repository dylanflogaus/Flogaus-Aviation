import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Certified flight instruction</p>
          <h1 id="hero-heading" className="hero__title">
            Train with clarity. Fly with confidence.
          </h1>
          <p className="hero__lede">
            Private, instrument, and recurrent training tailored to your goals — from first solos to
            checkride-ready proficiency. Calm coaching, exacting standards, and respect for your time.
          </p>
          <div className="hero__actions">
            <Link to="/booking" className="btn btn--primary">
              Schedule instruction
            </Link>
            <Link to="/about" className="btn btn--ghost">
              Meet your instructor
            </Link>
          </div>
        </div>
        <div className="hero__panel" aria-hidden="true">
          <div className="hero__panel-inner">
            <span className="hero__stat">
              <strong>Safety-first</strong>
              <span>Risk-managed every lesson</span>
            </span>
            <span className="hero__stat">
              <strong>Structured syllabus</strong>
              <span>Know what comes next</span>
            </span>
            <span className="hero__stat">
              <strong>Flexible booking</strong>
              <span>Reserve online in minutes</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
