import { Event } from '../../types/collective';

interface TodoProps {
    Events: Event[];
}

export const Todo = (props: TodoProps) => {
    return (
        <div className="container w-50 mt-5">
            <ul className="list-group list-group-flush">
                {props.Events.map((event) => (
                    <li className="list-group-item" key={event.name}>
                        {event.name}
                    </li>
                ))}
                {props.Events.length === 0 ? <li className="list-group-item">All done!</li> : null}
            </ul>
        </div>
    );
};
