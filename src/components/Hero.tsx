import { Link } from "react-router-dom";
import { HOME_AIRPORT_TBD } from "../config/site";

const HERO_BULLETS = [
  "CFI, Commercial, and Instrument certificates, plus a First Class medical",
  "287 hours total, 210 PIC, and 246.7 hours on the G1000, trained in the PA-28",
  "A free Intro Flight so you can meet your instructor and see if it's a fit",
] as const;

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">FAA Certified Flight Instructor · Wilmington, DE area</p>
          <h1 id="hero-heading" className="hero__title">
            Learn to fly with a calm, structured CFI who just passed the same checkrides you&apos;re working
            toward
          </h1>
          <p className="hero__lede">
            Private, recurrent, and checkride-ready training near {HOME_AIRPORT_TBD}. One-on-one coaching, clear
            lesson plans, and respect for your schedule.
          </p>
          <ul className="hero__bullets">
            {HERO_BULLETS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero__actions">
            <Link to="/booking?event=intro-flight" className="btn btn--primary">
              Book a free Intro Flight
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Ask a question
            </Link>
          </div>
        </div>
        <div className="hero__panel">
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
