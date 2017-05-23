import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'

import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className="main">
      <Route exact path="/" component={Main}></Route>
    </div>
  </BrowserRouter>, document.getElementById('root'));
