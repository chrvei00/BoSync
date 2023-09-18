import { NavLink } from 'react-router-dom';
import './NavBar.css';

interface Link {
    name: string;
    path: string;
    className?: string;
}

export const NavBar = () => {
    const links: Link[] = [
        {
            name: 'Oversikt',
            path: '/'
        },
        {
            name: 'Kalender',
            path: '/calendar'
        }
    ];

    const navLinkClassName = ({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
        isPending ? 'pending' : isActive ? 'active' : '';

    return (
        <nav className="nav-bar-container">
            <ul className="nav-bar-elements">
                {links.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={link.path || navLinkClassName}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
};
