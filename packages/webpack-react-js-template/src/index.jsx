import React from "react";
import ReactDOM from "react-dom/client";
import A from "./A.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import B from "./B.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routes = [
  {
    path: "/",
    Component: A,
    children: [],
  },
  {
    path: "/first",
    // Component: A_C,
    Component: B,
    // children: [{ path: '/A_C', element: <A_C></A_C> }]
  },
];

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
