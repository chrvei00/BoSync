import { Event, EventCategory } from '../../types/event';
import './CalendarEvent.css';

interface CalendarEventProps {
    event: Event;
}

const eventCategoryColorMap: Record<EventCategory, string> = {
    vask: '#048BA8',
    annet: '#2F2D2E',
    rydding: '#99C24D',
    kos: '#F18F01'
};

export const CalendarEvent = ({ event }: CalendarEventProps) => {
    return (
        <div
            className="calendar-event-container"
            style={{ backgroundColor: eventCategoryColorMap[event.category] }}
        >
            <span className="calendar-event-title">{event.title}</span>
            <p>{event.description}</p>
            {event.currResponsible && (
                <span className="calendar-event-responsible">{event.currResponsible.name}</span>
            )}
        </div>
    );
};
