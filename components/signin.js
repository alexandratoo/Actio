import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import Footer from './Footer'
import SignupForm from './SignupForm'
import axios from 'axios'
import {withRouter} from 'react-router-dom';



class SignIn extends Component{
  constructor(props){
    super(props)

    this.state = {email:'',password:''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    let testUser = {};
    testUser.email = this.state.email
    testUser.password = this.state.password

    axios.post('/api/signin', testUser)
      .then((response) =>{
        if(response.data != false){
          console.log(response);
          console.log('Valid User');
          this.props.history.push(`/users/${response.data.id}`);
        }
        else{
          console.log(response);
          console.log('Invalid User');
        }
      })

    console.log('sign in clicked');
  }


  handleChange(event){
    let stateChange = {}
    stateChange[event.target.name] = event.target.value;
    this.setState(stateChange);
  }

  render(){
    return(
      <div>


            <div className="card-block container col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
            <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}name="email" type="text" />
          <input onChange={this.handleChange}name="password" type="password"/>
          <input type="submit" className='btn-custom' />
        </form>
      </div>
      </div>
    
    )
  }
}


export default withRouter(SignIn)
