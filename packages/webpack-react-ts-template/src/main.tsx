import ReactDOM from 'react-dom/client';
import React from 'react';
// import App from './App.tsx';
// import router from './router';
import { RouterProvider, createBrowserRouter, RouteObject } from 'react-router-dom';
import App from './App';
import A from './page/A';

const root = ReactDOM.createRoot(document.getElementById('root')!);

// const routes= ;

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,
      children: [
        {
          path: 'a',
          // Component: A_C,
          Component: A,
        },
      ],
    },
    // {
    //   path: '/a',
    //   // Component: A_C,
    //   Component: A,
    //   // children: [{ path: '/A_C', element: <A_C></A_C> }]
    // },
  ],
  {
    basename: '/app',
  }
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
