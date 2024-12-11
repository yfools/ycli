import React from "react";
import A from "../page/A";
import B from "../page/b";
import App from "../app.jsx";
// import here

// routes here
let routes = [
  {
    path: "/",
    Component: App,
    children: [
      //src\page
      { path: "A", Component: A },
      { path: "B", Component: B },
    ],
  },
  {
    path: "/first",
    Component: A,
  },
];

export default routes;
