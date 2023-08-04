import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import ErrorPage from './pages/ErrorPage';
import AirlinePage from './pages/AirlinePage/AirlinePage';
import CommunityPage from './pages/AirlinePage/CommunityPage';
import CommunityDetailPage from './pages/AirlinePage/CommunityDetailPage';
import InfoPage from './pages/AirlinePage/InfoPage';
import AirlinePageTemplate from './components/AirlinePage/AirlinePageTemplate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AirlinePageTemplate />,
    children: [
      {
        path: '',
        element: <AirlinePage />,
      },
      {
        path: 'community',
        element: <CommunityPage />,
      },
      {
        path: 'community/:id',
        element: <CommunityDetailPage />,
      },
      {
        path: 'info/:id',
        element: <InfoPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
