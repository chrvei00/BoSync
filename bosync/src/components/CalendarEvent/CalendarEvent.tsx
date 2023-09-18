import { useEffect, useState } from 'react';
import { ReactComponent as CheckButton } from '../../assets/check-circle-fill.svg';
import { useAppDispatch } from '../../hooks/redux';
import { updateEventThunk } from '../../store/features/collective/eventThunks';
import { Event } from '../../types/collective';
import { EventColor, eventCategoryColorMap } from '../../util/color';
import './CalendarEvent.css';

interface CalendarEventProps {
    event: Event;
    handleEventClicked: () => void;
}

export const CalendarEvent = ({ event, handleEventClicked }: CalendarEventProps) => {
    const [isCompleted, setIsCompleted] = useState<boolean>(event.completed);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setIsCompleted(event.completed);
    }, [event]);

    const onCheckClicked = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.stopPropagation();
        setIsCompleted(!isCompleted);
        dispatch(updateEventThunk({ ...event, completed: !event.completed }));
    };

    return (
        <div
            onClick={handleEventClicked}
            className="calendar-event-container"
            style={{ backgroundColor: eventCategoryColorMap[event.category as EventColor] }}
        >
            <CheckButton
                className={`calendar-event-check ${isCompleted ? 'completed' : ''}`}
                onClick={onCheckClicked}
            />
            <span className="calendar-event-title">{event.name}</span>
            {event.assigned && <span className="calendar-event-responsible">{event.assigned}</span>}
        </div>
    );
};
