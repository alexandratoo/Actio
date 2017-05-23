/* eslint-disable max-len, camelcase */

// import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: []};
    this.handleSubmit = this.handleSubmit.bind(this);

    let dataObj = {};
    let usersObj = {};

    axios.get(`/api/users`)
    .then((data) => {
      usersObj = data.data[0];
      console.log()
    })
    .then(() => {
      this.setState({users: usersObj})
    })
    .catch((err) => console.error(err));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
   return <div>{this.state.users.first_name}{this.state.users.last_name}{this.state.users.email}</div>
  }
}

module.exports = Profile;
