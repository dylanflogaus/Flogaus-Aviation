import { Link } from "react-router-dom";

export function Contact() {
  const email = "info@flogausaviation.com";
  const phone = "+1 (302) 379-5071";
  const phoneRaw = "+13023795071";

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Contact</h1>
          <p className="page-header__lede">
            Questions before you book? Reach out directly. For scheduling and payment, use the booking page.
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
                Based near New Garden Flying Field (N57)
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
