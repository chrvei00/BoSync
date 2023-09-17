import { addDays, eachDayOfInterval } from 'date-fns';
import { localeFormat } from '../../util/dates';
import { CalendarDay } from '../CalendarDay/CalendarDay';
import './WeekCalendar.css';

interface WeekCalendarProps {
    dateStart: Date;
}

export const WeekCalendar = ({ dateStart }: WeekCalendarProps) => {
    const dateEnd = addDays(dateStart, 6);
    const dates = eachDayOfInterval({ start: dateStart, end: dateEnd });
    return (
        <div className="week-calendar-container">
            <h2>
                Kalender for {localeFormat(dateStart, 'short')} til{' '}
                {localeFormat(dateStart, 'short')}
            </h2>
            <div className="week-calendar-days-container">
                {dates.map((date) => (
                    <CalendarDay date={date} key={date.toISOString()} />
                ))}
            </div>
        </div>
    );
};
