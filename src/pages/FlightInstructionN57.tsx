import { Link } from "react-router-dom";

export function FlightInstructionN57() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Flight instruction near New Garden Flying Field (N57)</h1>
          <p className="page-header__lede">
            Structured, safety-first flight instruction based near N57 in Toughkenamon, Pennsylvania, with
            convenient access for pilots near Kennett Square and surrounding communities.
          </p>
        </div>
      </header>
      <section className="section" aria-labelledby="local-training-heading">
        <div className="container">
          <div className="content-measure">
            <h2 id="local-training-heading">Flight training near Toughkenamon and Kennett Square</h2>
            <p>
              Flogaus Aviation provides calm, focused instruction for pilots who want clear standards and steady
              progress. Training is based near New Garden Flying Field (N57), a convenient aviation location for
              students in the Toughkenamon and Kennett Square area.
            </p>
            <p>
              Each lesson is planned around your current experience, goals, aircraft setup, and schedule. Contact
              the instructor before your first lesson to confirm the right training plan and meeting details.
            </p>
            <div className="hero__actions">
              <Link to="/booking?event=intro-flight" className="btn btn--primary">
                Book a free Intro Flight
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr className="gold-rule" />
      <section className="section section--tight" aria-labelledby="training-options-heading">
        <div className="container">
          <h2 id="training-options-heading">Training options</h2>
          <p className="section__lede">
            Start with the goal you have today. The syllabus can be shaped around your experience and the aircraft
            available for training.
          </p>
          <div className="card-grid">
            <article className="card">
              <h3>Private pilot progress</h3>
              <p>
                Build sound habits from preflight planning through pattern work, cross-country preparation, and
                checkride readiness.
              </p>
            </article>
            <article className="card">
              <h3>Checkride preparation</h3>
              <p>
                Polish maneuvers, oral topics, and decision-making with a CFI who recently passed the same practical
                tests you are preparing for.
              </p>
            </article>
            <article className="card">
              <h3>Recurrent and confidence training</h3>
              <p>
                Refresh skills after time away, prepare for a new aircraft, or build confidence with deliberate,
                safety-first practice.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="how-it-works-heading">
        <div className="container">
          <div className="content-measure">
            <h2 id="how-it-works-heading">How local flight instruction works</h2>
            <ol className="steps-list">
              <li>
                <strong>Share your goal.</strong> Tell us whether you are starting, returning to flying, preparing
                for a checkride, or working on proficiency.
              </li>
              <li>
                <strong>Confirm the details.</strong> We will discuss your experience, aircraft access, scheduling
                needs, and the meeting location near N57.
              </li>
              <li>
                <strong>Train with a plan.</strong> Every session has clear objectives, a focused debrief, and a
                practical next step.
              </li>
            </ol>
            <p className="local-page__closing">
              Looking for a flight instructor near you? <Link to="/contact">Contact Flogaus Aviation</Link> or{" "}
              <Link to="/booking">request a time online</Link>.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-labelledby="local-faq-heading">
        <div className="container content-measure">
          <h2 id="local-faq-heading">Questions about flight instruction near N57</h2>
          <dl className="faq-list">
            <div>
              <dt>Where is instruction based?</dt>
              <dd>
                Training is based near New Garden Flying Field (N57) in Toughkenamon, Pennsylvania, with access for
                pilots near Kennett Square and surrounding communities.
              </dd>
            </div>
            <div>
              <dt>What should I share before booking?</dt>
              <dd>
                Share your current certificate or training goal, recent flight experience, aircraft access, and
                scheduling needs.
              </dd>
            </div>
            <div>
              <dt>What training goals can I discuss?</dt>
              <dd>
                Private pilot progress, recurrent training, checkride prep, and confidence-building are good starting
                points. Contact the instructor to confirm the right fit and current availability.
              </dd>
            </div>
            <div>
              <dt>What if weather affects a lesson?</dt>
              <dd>
                Contact the instructor before the lesson to confirm current conditions, meeting details, and any
                scheduling changes.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
