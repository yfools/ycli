import { RouteObject } from 'react-router-dom';
import React from 'react';
import App from '../App';
import A from '../page/A';
// import here

// routes here
let routes: Array<RouteObject> = [
  {
    path: '/',
    Component: App,
    children: [
      //src\page
      {},
      {},
    ],
  },
  {
    path: '/first',
    Component: A,
  },
];

export default routes;
