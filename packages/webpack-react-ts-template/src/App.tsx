import React from "react";
import dompurify from 'dompurify'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      app111
      <Outlet></Outlet>
    </div>
  );
}

export default App;
