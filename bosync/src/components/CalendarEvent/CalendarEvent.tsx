import { Event } from '../../types/collective';
import { EventColor, eventCategoryColorMap } from '../../util/color';
import './CalendarEvent.css';

interface CalendarEventProps {
    event: Event;
    handleEventClicked: () => void;
}

export const CalendarEvent = ({ event, handleEventClicked }: CalendarEventProps) => {
    return (
        <div
            onClick={handleEventClicked}
            className="calendar-event-container"
            style={{ backgroundColor: eventCategoryColorMap[event.category as EventColor] }}
        >
            <span className="calendar-event-title">{event.name}</span>
            {event.assigned && <span className="calendar-event-responsible">{event.assigned}</span>}
        </div>
    );
};
