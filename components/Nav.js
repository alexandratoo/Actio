import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile'
var style = {
    backgroundColor: "black",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};
export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
          <div style={style}>
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
