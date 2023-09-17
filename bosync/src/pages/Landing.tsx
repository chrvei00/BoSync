import { Todo } from '../components/Todos/Todos';

export const Landing = () => {
    return (
        <>
            <div className="container">
                <h1>Kollektivnavn</h1>
            </div>
            <div className="my-5">
                <h4 className="text-center">Your todos:</h4>
                <Todo Events={[]} />
            </div>
            <div className="my-5">
                <h4 className="text-center">Collective todos:</h4>
                <Todo Events={[]} />
            </div>
        </>
    );
};
