import { Outlet } from 'react-router';
import { NavBar } from '../NavBar/NavBar';
import './Root.css';

export const Root = () => {
    return (
        <>
            <NavBar />
            <div className="outlet-container">
                <Outlet />
            </div>
        </>
    );
};
