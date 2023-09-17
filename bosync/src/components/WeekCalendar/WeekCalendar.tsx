import { addDays, eachDayOfInterval } from 'date-fns';
import { useEffect } from 'react';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left-circle-fill.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right-circle-fill.svg';
import { useAppDispatch } from '../../hooks/redux';
import { getCollectiveByNameThunk } from '../../store/features/collective/collectiveThunks';
import { localeFormat } from '../../util/dates';
import { CalendarDay } from '../CalendarDay/CalendarDay';
import './WeekCalendar.css';

interface WeekCalendarProps {
    dateStart: Date;
}

export const WeekCalendar = ({ dateStart }: WeekCalendarProps) => {
    const dateEnd = addDays(dateStart, 6);
    const dates = eachDayOfInterval({ start: dateStart, end: dateEnd });
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCollectiveByNameThunk('test'));
    }, [dispatch]);

    return (
        <div className="week-calendar-container">
            <span className="week-calendar-title">
                Kalender for {localeFormat(dateStart, 'short')} til {localeFormat(dateEnd, 'short')}
            </span>
            <div className="week-calendar-nav-container">
                <ArrowLeft className="week-calendar-arrow" />
                <div className="week-calendar-days-container">
                    {dates.map((date) => (
                        <CalendarDay date={date} key={date.toISOString()} />
                    ))}
                </div>
                <ArrowRight className="week-calendar-arrow" />
            </div>
        </div>
    );
};
