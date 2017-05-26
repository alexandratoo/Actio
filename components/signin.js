import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav'
import Footer from './Footer'
import SignupForm from './SignupForm'
import axios from 'axios'
import {withRouter} from 'react-router-dom';

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.children[3]);
    let testUser = {};
    testUser.email = this.state.email
    testUser.password = this.state.password

    axios.post('/api/signin', testUser).then((response) => {
      if (response.data != false) {
        console.log(response);
        console.log('Valid User');
        this.props.history.push(`/users/${response.data.id}`);
      } else {
        console.log(response);
        console.log('Invalid User');
      }
    })

    console.log('sign in clicked');
  }

  handleClick(event){
    window.location.href = "/signup";
  }

  handleChange(event) {
    let stateChange = {}
    stateChange[event.target.name] = event.target.value;
    this.setState(stateChange);
  }

  render() {
    return (
      <div>
        <div className="card-block container col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">

          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit}>
            <input name="email" id="signIn" onChange={this.handleChange} placeholder=" email" type="text"/>
            <input name="password" id="password" onChange={this.handleChange} placeholder=" password" type="password"/>
            <hr/>
            <div className="container col-12-xs">
              <div className="row orDiv">
                <input id="signInn" type="submit" value="Sign In" className='btn-secondary sub'/>
                <span className="or">or</span>
              </div>
            </div>
          </form>
          <input type="submit" id="signup" value="Sign Up" className='btn-secondary sub' onClick={this.handleClick}/>
        </div>

      </div>

    )
  }
}

export default withRouter(SignIn)
