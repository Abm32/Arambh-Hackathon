import React from 'react';
import { createRoot } from 'react-dom/client';
import Nav from './containers/navbar/App.jsx';
import {CalenderContextProvider} from './Context/calender.context';

const rootElement = document.getElementById('body');
const root = createRoot(rootElement); // createRoot(rootElement!) if you use TypeScript
root.render(
  <React.Fragment>
    <CalenderContextProvider>
      <Nav />
    </CalenderContextProvider>
  </React.Fragment>
);
