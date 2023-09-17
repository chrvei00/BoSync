import { addDays, eachDayOfInterval } from 'date-fns';
import { useEffect, useState } from 'react';
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
    const [currDateStart, setCurrDateStart] = useState<Date>(dateStart); // TODO: [2021-10-06]: Use this to update the calendar when the user clicks the arrows [2021-10-06
    const [currDateEnd, setCurrDateEnd] = useState<Date>(dateEnd);

    const dates = eachDayOfInterval({ start: currDateStart, end: currDateEnd });
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCollectiveByNameThunk('test'));
    }, [dispatch]);

    const clickLeft = () => {
        setCurrDateStart(addDays(currDateStart, -7));
        setCurrDateEnd(addDays(currDateEnd, -7));
    };

    const clickRight = () => {
        setCurrDateStart(addDays(currDateStart, 7));
        setCurrDateEnd(addDays(currDateEnd, 7));
    };

    return (
        <div className="week-calendar-container">
            <span className="week-calendar-title">
                Kalender for {localeFormat(currDateStart, 'short')} til{' '}
                {localeFormat(currDateEnd, 'short')}
            </span>
            <div className="week-calendar-nav-container">
                <ArrowLeft className="week-calendar-arrow" onClick={clickLeft} />
                <div className="week-calendar-days-container">
                    {dates.map((date) => (
                        <CalendarDay date={date} key={date.toISOString()} />
                    ))}
                </div>
                <ArrowRight className="week-calendar-arrow" onClick={clickRight} />
            </div>
        </div>
    );
};
