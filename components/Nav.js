import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
          <div className="container logo">
        
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Profile">My Profile</Link></li>
              <li><Link to="/events">Find Events</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
