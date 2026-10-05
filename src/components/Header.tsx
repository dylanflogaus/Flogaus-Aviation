import { useCallback, useEffect, useId, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { parseBookingEventId } from "../config/booking";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `header__link${isActive ? " header__link--active" : ""}`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navId = useId();
  const location = useLocation();
  const bookingEvent =
    location.pathname === "/booking"
      ? parseBookingEventId(new URLSearchParams(location.search).get("event"))
      : null;

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.search, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    const mq = window.matchMedia("(max-width: 767px)");
    const applyScrollLock = () => {
      document.body.style.overflow = mq.matches ? "hidden" : "";
    };
    applyScrollLock();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", applyScrollLock);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", applyScrollLock);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <NavLink to="/" className="header__brand" end onClick={closeMenu}>
          <img
            src="/airplane.svg"
            alt=""
            className="header__brand-mark"
            width={40}
            height={40}
            aria-hidden="true"
            decoding="async"
          />
          <span className="header__brand-text">Flogaus Aviation</span>
        </NavLink>
        <button
          type="button"
          className={`header__menu-toggle${menuOpen ? " header__menu-toggle--open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls={navId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="header__menu-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        {menuOpen ? (
          <button
            type="button"
            className="header__nav-backdrop"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={closeMenu}
          />
        ) : null}
        <nav
          id={navId}
          className={`header__nav${menuOpen ? " header__nav--open" : ""}`}
          aria-label="Primary"
        >
          <ul className="header__list">
            <li>
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/flight-instruction-n57" className={navLinkClass}>
                Flight instruction
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking?event=intro-flight"
                className={() =>
                  `${navLinkClass({ isActive: bookingEvent === "intro-flight" })} header__cta`.trim()
                }
              >
                Book a free Intro Flight
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking?event=flight-lesson"
                className={() =>
                  `${navLinkClass({ isActive: bookingEvent === "flight-lesson" })} header__link--secondary`.trim()
                }
              >
                Book a lesson
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
