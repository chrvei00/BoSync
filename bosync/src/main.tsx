import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './components/Root/Root.tsx';
import { WeekCalendar } from './components/WeekCalendar/WeekCalendar.tsx';
import './index.css';
import { store } from './store/store.ts';
import Auth from './pages/Auth.tsx';

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
    },
    {
        path: '/auth',
        element: <Auth />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);
