import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import Footer from './Footer'
import SignupForm from './SignupForm'
import axios from 'axios'
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

class Signup extends Component {
  constructor(props){
    super(props)
    console.log(this.props);
  }
  createUserSubmission(user){
    console.log('posting')
    return axios.post('/api/users', user)
      .then((data)=>{
        console.log('the data',data);
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

export default withRouter(Signup)
