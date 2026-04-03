import { useCallback, useEffect, useId, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `header__link${isActive ? " header__link--active" : ""}`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navId = useId();
  const location = useLocation();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

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
        <NavLink
          to="/"
          className="header__brand"
          end
          onClick={closeMenu}
        >
          <span className="header__brand-mark" aria-hidden="true" />
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
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  `${navLinkClass({ isActive })} header__cta`.trim()
                }
              >
                Book
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
