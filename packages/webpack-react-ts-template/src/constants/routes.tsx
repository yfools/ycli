import { RouteObject } from 'react-router-dom';
import React from 'react';
import App from '../App';
import A from '../page/A';
import B from '../page/b';
// import here

// routes here
let routes: Array<RouteObject> = [
  {
    path: '/',
    Component: App,
    children: [
      //src\page
      { path: 'A', Component: A },
      { path: 'B', Component: B },
    ],
  },
  {
    path: '/first',
    Component: A,
  },
];

export default routes;
