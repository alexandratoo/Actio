import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Events from './components/Events';

import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className="main">
      <Route exact path="/" component={Main}></Route>
      <Route path="/events" component={Events}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
