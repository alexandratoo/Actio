import React, { Component } from 'react';


class SignupForm extends Component {
  constructor(props){
    super(props)

    this.state = {first_name:'',
                  last_name:'',
                  profile_pic:'',
                  password:'',
                  zip:'',
                  email:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state)
  }

  handleChange(event){
    var obj = {}
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }
  render(){
    return (
      <div class="content">
              <div class="card-block container col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
                  <form role="form" method="post" onSubmit={this.handleSubmit}>
                      <h1 class="signupTitle text-center">Signup</h1>
                      <input
                        onChange={this.handleChange}
                        type="text"
                        name="first_name"
                        id="firstName"
                        class="form-control input-lg"
                        placeholder="First Name" />
                      <input
                        onChange={this.handleChange}
                        type="text"
                        name="last_name"
                        id="lastName"
                        className="form-control input-lg"
                        placeholder="Last Name"
                         />
                      <div class="row">
                        <input
                          onChange={this.handleChange}
                          type="text"
                          name="zip"
                          id="zip"
                          className="form-control input-lg"
                          placeholder="Zipcode" />
                      </div>
                      <div class="row">
                        <input
                          onChange={this.handleChange}
                          type="text"
                          name="email"
                          id="email"
                          class="form-control input-lg"
                          placeholder="Email Address" />
                      </div>
                      <div class="row">
                        <input
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                            id="password"
                            className="form-control input-lg"
                            placeholder="Password" />
                      </div>
                      <div class="row">
                        <input
                          onChange={this.handleChange}
                          type="text"
                          name="profile_pic"
                          id="photo"
                          class="photoBtn"
                          placeholder="Profile Image URL" />
                      </div>
                      <div class="row btnrow">
                          <div class="col-xs-12 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 "><input type="submit" value="SIGN UP" class="siteBtn btn  btn-block btn-lg" tabindex="12" /></div>
                      </div>
                  </form>
              </div>
          </div>
    )
  }
}


export default SignupForm
