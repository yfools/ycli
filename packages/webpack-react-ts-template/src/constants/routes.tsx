import { RouteObject } from 'react-router-dom';
import React from 'react';
import App from '../App';
// import A_C from '../page/A/A_C/index';

let routes: Array<RouteObject> = [
  {
    path: '/',
    Component: App,
    children: [],
  },
  {
    path: '/first',
    // Component: A_C,
    // Component: A_C,
    // children: [{ path: '/A_C', element: <A_C></A_C> }]
  },
];

export default routes;
