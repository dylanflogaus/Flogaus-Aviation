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
              an instrument proficiency footprint, we will build a syllabus around your timeline and your goals.
            </p>
            <h2 style={{ marginTop: "2rem" }}>Background</h2>
            <p>
            I’m a certified flight instructor (CFI) with nearly 300 hours of flight time, plus my Commercial Pilot License (CPL) and Instrument Rating (IR).
</p><p>
I may not have thousands of hours, but that’s actually an advantage for you. I recently passed the same checkrides you’re preparing for. The knowledge is fresh, and I remember exactly what it’s like to learn these skills.
</p><p>
My goal is simple: help you become a safe, confident, and competent pilot—whether you’re working on your private, instrument, or just improving your skills.
</p><p>
You bring the motivation. I’ll bring the instruction, patience, and a safety-first mindset.


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
