import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Todo } from '../components/Todos/Todos';
import { selectCollective, selectUser } from '../store/features/collective/collectiveReducer';
import { Event } from '../types/collective';

const eventComparator = (a: Event, b: Event) => {
    if (a.deadline < b.deadline) return -1;
    if (a.deadline > b.deadline) return 1;
    return 0;
};

export const Landing = () => {
    const collective = useSelector(selectCollective);
    const user = useSelector(selectUser);

    const ownEvents = useMemo(() => {
        const filteredEvents = collective?.event?.filter(
            (event) =>
                event.assigned === user.username &&
                new Date() < new Date(event.deadline) &&
                !event.completed
        );
        filteredEvents?.sort(eventComparator);
        return filteredEvents;
    }, [collective, user]);

    const notOwnEvents = useMemo(() => {
        const filteredEvents = collective?.event?.filter(
            (event) =>
                event.assigned !== user.username &&
                new Date() < new Date(event.deadline) &&
                !event.completed
        );
        filteredEvents?.sort(eventComparator);
        return filteredEvents;
    }, [collective, user]);

    const completedEvents = useMemo(() => {
        const filteredEvents = collective?.event?.filter((event) => event.completed);
        filteredEvents?.sort(eventComparator);
        return filteredEvents;
    }, [collective]);

    return (
        <div className="container" style={{ color: 'white' }}>
            <div className="container">
                <h1>
                    <u>{collective.name}</u>
                </h1>
            </div>
            <div className="my-5">
                <h4 className="text-center">Dine gjøremål:</h4>
                {ownEvents && <Todo Events={ownEvents} />}
            </div>
            <div className="my-5">
                <h4 className="text-center">Kollektivetsgjøremål:</h4>
                {notOwnEvents && <Todo Events={notOwnEvents} />}
            </div>
            <div className="my-5">
                <h4 className="text-center">Gjennomførte gjøremål:</h4>
                {notOwnEvents && <Todo Events={completedEvents} />}
            </div>
        </div>
    );
};
