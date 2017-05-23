import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import Profile from './components/Profile'
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className="main">
      <Route exact path="/" component={Main}></Route>
      <Route path="/profile" component={Profile} />
    </div>
  </BrowserRouter>, document.getElementById('root'));
