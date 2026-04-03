import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `header__link${isActive ? " header__link--active" : ""}`;

export function Header() {
  return (
    <header className="site-header">
      <div className="container header__inner">
        <NavLink to="/" className="header__brand" end>
          <span className="header__brand-mark" aria-hidden="true" />
          <span className="header__brand-text">Flogaus Aviation</span>
        </NavLink>
        <nav className="header__nav" aria-label="Primary">
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
