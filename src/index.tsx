import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import BlackJackTable from './routes/BlackJackTable';
import Error_page from './components/error_handlers/Error_page';

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <Error_page /> },
  {
    path: 'table/blackjack',
    element: <BlackJackTable />,
  },
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
