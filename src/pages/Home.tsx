import { Hero } from "../components/Hero";

export function Home() {
  return (
    <>
      <Hero />
      <section className="section section--tight" aria-labelledby="why-heading">
        <div className="container">
          <h2 id="why-heading">Why train with us</h2>
          <p style={{ maxWidth: "40rem", marginBottom: "2rem" }}>
            We combine disciplined lesson planning with a calm, supportive cockpit — so you build
            habit patterns that hold up when things get busy.
          </p>
          <div className="card-grid">
            <article className="card">
              <h3>Clear progression</h3>
              <p>
                Every session has defined objectives and debrief points. You always know where you stand
                relative to checkride or proficiency standards.
              </p>
            </article>
            <article className="card">
              <h3>Decision-quality training</h3>
              <p>
                Weather, systems, and emergencies are framed as structured problems — so judgment improves
                alongside stick-and-rudder skill.
              </p>
            </article>
            <article className="card">
              <h3>Respect for your schedule</h3>
              <p>
                Book online, receive reminders, and reschedule when life happens. Paid sessions are handled
                securely through Cal.com and Stripe.
              </p>
            </article>
          </div>
        </div>
      </section>
      <hr className="gold-rule" />
      <section className="section" aria-labelledby="trust-heading">
        <div className="container">
          <h2 id="trust-heading">Credentials and aircraft</h2>
          <div className="card-grid">
            <article className="card">
              <h3>Certifications</h3>
              <p>
                FAA Certified Flight Instructor (placeholder). Add your ratings — CFII, MEI, AGI, and any
                other credentials your clients should see here.
              </p>
            </article>
            <article className="card">
              <h3>Aircraft &amp; locations</h3>
              <p>
                Training in Technically Advanced Aircraft (TAA) or your specified make/model (placeholder).
                List home airport and satellite locations you serve.
              </p>
            </article>
            <article className="card">
              <h3>Safety culture</h3>
              <p>
                Standardized briefings, sterile cockpit discipline, and explicit personal minimums —
                modeled on how you actually fly in the system.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
