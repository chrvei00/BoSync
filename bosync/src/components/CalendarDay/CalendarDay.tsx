import { getDate } from 'date-fns';
import { useState } from 'react';
import { ReactComponent as Plus } from '../../assets/plus-circle.svg';
import { mockEvents } from '../../util/mock';
import { CalendarEvent } from '../CalendarEvent/CalendarEvent';
import { EventPopup } from '../EventPopup/EventPopup';
import './CalendarDay.css';

interface CalendarDayProps {
    date: Date;
}

const dayNames: Record<number, string> = {
    0: 'Søndag',
    1: 'Mandag',
    2: 'Tirsdag',
    3: 'Onsdag',
    4: 'Torsdag',
    5: 'Fredag',
    6: 'Lørdag'
};

const getFormattedDayString = (day: number) => {
    return dayNames[day].substring(0, 3) + '.';
};

export const CalendarDay = ({ date }: CalendarDayProps) => {
    const [popupVisibility, setPopupVisibility] = useState(false);

    const onPlusClick = () => {
        setPopupVisibility(true);
    };

    const onCloseClick = () => {
        setPopupVisibility(false);
    };

    const events = mockEvents.filter((e) => e.date.getDay() === date.getDay());

    return (
        <div className="calendar-day-container">
            <EventPopup onCloseClick={onCloseClick} visible={popupVisibility} />
            <Plus className="add-event-icon" onClick={onPlusClick} />
            <span className="day-of-week">{getFormattedDayString(date.getDay())}</span>
            <span className="date">{getDate(date)}</span>
            <div className="calendar-day-events">
                {events.map((event) => (
                    <CalendarEvent event={event} key={event.id} />
                ))}
            </div>
        </div>
    );
};
