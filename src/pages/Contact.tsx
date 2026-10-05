import { Link } from "react-router-dom";
import { HOME_AIRPORT_TBD, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY } from "../config/site";

export function Contact() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Contact</h1>
          <p className="page-header__lede">
            Questions before you book? Reach out directly. For scheduling, use the booking page — Intro Flights are
            free.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container contact-block">
          <ul className="contact-list">
            <li>
              <strong>Email</strong>
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
            </li>
            <li>
              <strong>Phone</strong>
              <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>
            </li>
            <li>
              <strong>Service area</strong>
              <span style={{ color: "var(--color-muted)" }}>
                Wilmington, DE area near {HOME_AIRPORT_TBD}
              </span>
            </li>
          </ul>
          <p className="contact__next-step">
            Prefer to book immediately?{" "}
            <Link to="/booking?event=intro-flight">Book a free Intro Flight</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
