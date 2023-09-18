import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Todo } from '../components/Todos/Todos';
import { selectCollective, selectUser } from '../store/features/collective/collectiveReducer';

export const Landing = () => {
    const collective = useSelector(selectCollective);
    const user = useSelector(selectUser);

    const ownEvents = useMemo(() => {
        return collective?.event?.filter((event) => event.assigned === user.username);
    }, [collective, user]);

    const notOwnEvents = useMemo(() => {
        return collective?.event?.filter((event) => event.assigned !== user.username);
    }, [collective, user]);

    return (
        <div className="container" style={{ color: 'white' }}>
            <div className="container">
                <h1>{collective.name}</h1>
            </div>
            <div className="my-5">
                <h4 className="text-center">Your todos:</h4>
                {ownEvents && <Todo Events={ownEvents} />}
            </div>
            <div className="my-5">
                <h4 className="text-center">Collective todos:</h4>
                {notOwnEvents && <Todo Events={notOwnEvents} />}
            </div>
        </div>
    );
};
