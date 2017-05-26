import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

class MessageForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handling submit');
    let newMessage =  {};

    newMessage.title = this.state.title;
    newMessage.body = this.state.body;
    newMessage.event_id = this.props.id

    axios.post('/api/messages', newMessage).then((data) => {
      console.log('inside the call')
      window.location.reload();
    })
  }
  handleChange(event) {
    const obj = {}
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div className="content">
        <div className="card-block container col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
          <form role="form" method="post" onSubmit={this.handleSubmit} className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-1">
            <h1 className="text-center">Create Message</h1>
            <div className="row">
            <input onChange={this.handleChange} type="text" name="title" id="messageTitle" className="form-control input-lg" placeholder="Message Title"/>
            </div>
            <div className="row">
              <textarea onChange={this.handleChange} name="body" id="messageBody" className="form-control input-lg" style={{marginTop:"5px"}} placeholder="Enter your message"/>
            </div>
            <div className="row btnrow">
              <div className="col-xs-12 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 "><input type="submit" value="Post" className="siteBtn btn btn-block btn-lg" style={{marginTop:"5px"}}/></div>
            </div>
          </form>
        </div>
      </div>
  )
}

}

export default withRouter(MessageForm)
