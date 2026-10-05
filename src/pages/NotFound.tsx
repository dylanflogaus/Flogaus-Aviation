import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Page not found</h1>
          <p className="page-header__lede">
            That URL is not part of Flogaus Aviation&apos;s public site. Use the links below to get back on
            course.
          </p>
        </div>
      </header>
      <section className="section section--tight">
        <div className="container content-measure">
          <div className="hero__actions">
            <Link to="/" className="btn btn--primary">
              Back to home
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Contact the instructor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
