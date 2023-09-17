import { getDate } from 'date-fns';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Plus } from '../../assets/plus-circle.svg';
import { selectEventsOnDate } from '../../store/features/collective/collectiveReducer';
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

    const events = useSelector(selectEventsOnDate(date));

    const onPlusClick = () => {
        setPopupVisibility(true);
    };

    const onCloseClick = () => {
        setPopupVisibility(false);
    };

    return (
        <div className="calendar-day-container">
            <EventPopup onCloseClick={onCloseClick} visible={popupVisibility} date={date} />
            <Plus className="add-event-icon" onClick={onPlusClick} />
            <span className="day-of-week">{getFormattedDayString(date.getDay())}</span>
            <span className="date">{getDate(date)}</span>
            <div className="calendar-day-events">
                {events &&
                    events.length > 0 &&
                    events.map((event) => (
                        <CalendarEvent event={event} key={crypto.randomUUID()} />
                    ))}
            </div>
        </div>
    );
};
