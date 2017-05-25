import React, { Component } from 'react'
import SignIn from './signin'
import { Link } from 'react-router-dom'
import FacebookLogin from './FacebookLogin'

export default class Main extends Component {
  render() {
  return (
    <div class="card-block loginContent container col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
      <h2>Welcome to ACTIO</h2>
      <FacebookLogin  fb={FB}/>

      <SignIn />

    </div>
  );
 }
}
