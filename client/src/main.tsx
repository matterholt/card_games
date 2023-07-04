import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

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


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
)

