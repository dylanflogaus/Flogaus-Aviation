import { Link } from "react-router-dom";

export function Contact() {
  const email = "hello@flogausaviation.com";
  const phone = "+1 (555) 555-0100";
  const phoneRaw = "+15555550100";

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Contact</h1>
          <p className="page-header__lede">
            Questions before you book? Reach out directly. For scheduling and payment, use the booking page —
            it connects to Cal.com (and Stripe for paid sessions).
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container contact-block">
          <ul className="contact-list">
            <li>
              <strong>Email</strong>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <strong>Phone</strong>
              <a href={`tel:${phoneRaw}`}>{phone}</a>
            </li>
            <li>
              <strong>Service area</strong>
              <span style={{ color: "var(--color-muted)" }}>
                Based near Example County Regional (KXXX) — update with your real airport and travel radius.
              </span>
            </li>
          </ul>
          <p style={{ marginTop: "2rem" }}>
            Prefer to book immediately? <Link to="/booking">Go to scheduling</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
