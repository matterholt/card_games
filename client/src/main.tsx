import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ErrorBoundary } from "react-error-boundary";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import BlackJackGame from "./routes/BlackJackGame";
import Error_page from "./components/error_handlers/ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error_page /> },
  {
    path: "table/blackjack",
    element: <BlackJackGame />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
