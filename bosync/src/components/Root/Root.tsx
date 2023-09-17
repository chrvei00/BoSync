import { Outlet } from 'react-router';
import { useAuth } from '../../hooks/isAuth';
import { NavBar } from '../NavBar/NavBar';
import './Root.css';

export const Root = () => {
    useAuth();
    return (
        <>
            <NavBar />
            <div className="outlet-container">
                <Outlet />
            </div>
        </>
    );
};
