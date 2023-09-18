import { Event } from '../../types/collective';

interface TodoProps {
    Events: Event[];
}

export const Todo = (props: TodoProps) => {
    return (
        <div className="container w-50">
            <ul className="list-group list-group-flush">
                {props.Events.map((event) => (
                    <li className="list-group-item mt-2 rounded" key={event.name}>
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                        <p>Frist: {new Date(event.deadline).toLocaleDateString()}</p>
                    </li>
                ))}
                {props.Events.length === 0 ? (
                    <li className="list-group-item mt-2 rounded">Alle gjøremål fullført!</li>
                ) : null}
            </ul>
        </div>
    );
};
