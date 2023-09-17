import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './components/Root/Root.tsx';
import { WeekCalendar } from './components/WeekCalendar/WeekCalendar.tsx';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <div>404 not found</div>,
        children: [
            {
                path: '/calendar',
                element: <WeekCalendar dateStart={new Date()} />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
