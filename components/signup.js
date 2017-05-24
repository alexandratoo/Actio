import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import Footer from './Footer'
import SignupForm from './SignupForm'
import axios from 'axios'

export default class Signup extends Component {
  constructor(props){
    super(props)
  }
  createUserSubmission(user){
    axios.post('/api/user', user)
      .then((newUser) =>{
        console.log(newUser);
      })
  }

  render () {
    return(
      <div>
        <SignupForm createUserSubmission={this.createUserSubmission}/>
      </div>
    )
  }
}
