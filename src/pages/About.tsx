export function About() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">About</h1>
          <p className="page-header__lede">
            Experience, patience, and high standards — without the ego. Here is the story clients should know
            before they strap in.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container about-grid">
          <div>
            <h2>Instruction philosophy</h2>
            <p>
              Good training feels boring when it is done right: predictable flows, early stabilization, and
              crisp corrections. I teach pilots to think in altitude, energy, and options — so the airplane
              goes where you intend, even when the plan changes.
            </p>
            <p>
              Whether you are working toward a private certificate, knocking off rust after a hiatus, or adding
              an instrument proficiency footprint, we will build a syllabus around your timeline and your
              airplane (or the school's).
            </p>
            <h2 style={{ marginTop: "2rem" }}>Background (placeholder)</h2>
            <p>
              Replace this block with your hours, ratings, professional flying background, and teaching
              history. Mention any specialty: mountain flying, complex endorsements, Cirrus transition, or
              recurrent programs for owners.
            </p>
          </div>
          <aside className="about-photo" role="img" aria-label="Instructor portrait placeholder">
            Add your
            <br />
            portrait here
          </aside>
        </div>
      </section>
    </>
  );
}
