import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Events from './components/Events';
import Profile from './components/Profile'


import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className="main">
      <Route exact path="/" component={Main}></Route>
      <Route path="/events" component={Events}></Route>
      <Route exact path="/users/:id" component={Profile}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
