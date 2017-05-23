import React, { Component } from 'react'
import Nav from './Nav'
import Profile from './Profile'

export default class Main extends Component {
  render() {
  return (
    <div className="main">
      <Nav/>
      <h2>Main Component</h2>
    </div>
  );
 }
}
