import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './components/Root/Root.tsx';
import './index.css';
import Auth from './pages/Auth.tsx';
import { CalendarPage } from './pages/CalendarPage/CalendarPage.tsx';
import { Landing } from './pages/Landing.tsx';
import { store } from './store/store.ts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <div>404 not found</div>,
        children: [
            {
                path: '/calendar',
                element: <CalendarPage />
            },
            {
                path: '/',
                element: <Landing />
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
