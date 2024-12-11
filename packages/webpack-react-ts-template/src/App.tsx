import React from 'react';
import dompurify from 'dompurify';
import { Outlet } from 'react-router-dom';
// import debounce from 'lodash/debounce';
import moment from 'moment';
import 'moment/locale/zh-cn';

function App() {
  // const fn = debounce;
  const m = moment;
  return (
    <div>
      app111
      <p></p>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
