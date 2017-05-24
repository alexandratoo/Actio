<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Events from './components/Events';
=======
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import Profile from './components/Profile'
>>>>>>> profile page displayingbasic events

import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className="main">
      <Route exact path="/" component={Main}></Route>
<<<<<<< HEAD
      <Route path="/events" component={Events}></Route>
=======
      <Route exact path="/users/:id" component={Profile}></Route>
>>>>>>> profile page displayingbasic events
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
