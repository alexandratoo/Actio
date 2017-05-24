import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookie';


class UserFeed extends Component{
  constructor(props){
    super(props);
    this.state={messageList:[]}
  }
  render(){
    return(
      <h1>My Messages</h1>
    )
  }
}


export default UserFeed
