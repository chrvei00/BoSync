import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
// const { login, register, checkAuth } = require("../util/api");

function Auth() {
    const [error, setError] = useState('');

    // const handleLogin = (e) => {};

    // const handleRegister = (e) => {};

    const [authMode, setAuthMode] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [collective, setCollective] = useState('');

    function changeAuthMode() {
        setAuthMode(!authMode);
    }

    if (authMode) {
        return (
            <div
                className="container-fluid bg-dark text-white bg-opacity-75"
                style={{
                    maxWidth: 350,
                    borderRadius: 10,
                    marginTop: 100,
                    padding: 20,
                    position: 'relative'
                }}
            >
                <h3 className="text-center">Logg inn</h3>

                <div className="text-center">
                    Ny?{' '}
                    <button
                        className="btn btn-sm btn-outline-light fw-bold"
                        onClick={changeAuthMode}
                    >
                        Registrer deg
                    </button>
                </div>
                <form onSubmit={(e) => e}>
                    <div>
                        <div className="form-group mt-3">
                            <label>Navn</label>
                            <input
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                                id="name"
                                required
                                type="text"
                                className="form-control mt-1"
                                placeholder="Fyll inn namn"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Hemmelig ord</label>
                            <input
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                id="password"
                                required
                                type="password"
                                className="form-control mt-1"
                                placeholder="Fyll inn passord"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-success">
                                Logg inn
                            </button>
                            <p className="text-danger fw-bold">{error}</p>
                        </div>
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div
                className="container-fluid bg-dark text-white bg-opacity-50"
                style={{
                    maxWidth: 350,
                    borderRadius: 10,
                    marginTop: 100,
                    padding: 20,
                    position: 'relative'
                }}
            >
                <h3 className="text-center">Registrer deg</h3>
                <div className="text-center">
                    Har du bruker?{' '}
                    <button
                        className="btn btn-sm btn-outline-light fw-bold"
                        onClick={changeAuthMode}
                    >
                        Logg inn
                    </button>
                </div>
                <form onSubmit={(e) => e}>
                    <div>
                        <div className="form-group mt-3">
                            <label>Navn</label>
                            <input
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                                id="name"
                                required
                                type="text"
                                className="form-control mt-1"
                                placeholder="Fyll inn namn"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Hemmelig ord</label>
                            <input
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                id="password"
                                required
                                type="password"
                                className="form-control mt-1"
                                placeholder="Fyll inn passord"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Skriv inn navnet på ditt kollektiv</label>
                            <input
                                onChange={(event) => {
                                    setCollective(event.target.value);
                                }}
                                id="collective"
                                required
                                type="name"
                                className="form-control mt-1"
                                placeholder="Navn på collective"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-success">
                                Registrer
                            </button>
                            <p className="text-danger fw-bold">{error}</p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Auth;
