import { useSearchParams } from "react-router-dom";
import {
  BOOKING_EVENTS,
  BOOKING_SCHEDULING_NOTE,
  parseBookingEventId,
  type BookingEventId,
} from "../config/booking";

export function LessonPicker() {
  const [params, setParams] = useSearchParams();
  const selected = parseBookingEventId(params.get("event"));

  const selectEvent = (id: BookingEventId) => {
    if (id === selected) return;
    setParams({ event: id }, { replace: true });
  };

  return (
    <div className="lesson-picker-block">
      <div className="lesson-picker" role="radiogroup" aria-label="Choose a lesson type">
        {BOOKING_EVENTS.map((event) => {
          const isSelected = event.id === selected;
          return (
            <button
              key={event.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`lesson-picker__option${isSelected ? " lesson-picker__option--selected" : ""}`}
              onClick={() => selectEvent(event.id)}
            >
              <span className="lesson-picker__title">{event.title}</span>
              <span className="lesson-picker__meta">
                <span>{event.priceLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{event.durationLabel}</span>
              </span>
            </button>
          );
        })}
      </div>
      <p className="lesson-picker__note">{BOOKING_SCHEDULING_NOTE}</p>
    </div>
  );
}
