import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import GoogleLogin from './GoogleLogin'

export default class Main extends Component {
  render() {
  return (
    <div className="main">
      <Nav/>
      <h2>Main Component</h2>
      <GoogleLogin/>
      <Footer/>
    </div>
  );
 }
}
