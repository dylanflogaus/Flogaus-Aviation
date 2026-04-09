import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__title">Flogaus Aviation</p>
          <p className="footer__text">
            Structured, safety-first flight instruction for pilots who want clear standards and steady
            progress.
          </p>
        </div>
        <div>
          <p className="footer__title">Explore</p>
          <ul className="footer__list">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/booking">Book a session</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer__title">Contact</p>
          <ul className="footer__list">
            <li>
              <a href="mailto:info@flogausaviation.com">info@flogausaviation.com</a>
            </li>
            <li>
              <a href="tel:+13023795071">+1 (302) 379-5071</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ marginTop: "2rem" }}>
        <hr className="gold-rule" />
        <p className="footer__text" style={{ marginTop: "1.25rem", fontSize: "0.875rem" }}>
          © {year} Flogaus Aviation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
