import { CalEmbed } from "../components/CalEmbed";

export function Booking() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Book instruction</h1>
          <p className="page-header__lede">
            Choose a time that fits your calendar. Scheduling runs on Cal.com. If an event type requires
            payment, Stripe is handled inside Cal — you will complete checkout there, not on this website.
          </p>
        </div>
      </header>
      <section className="section section--tight">
        <div className="container">
          <CalEmbed />
        </div>
      </section>
    </>
  );
}
