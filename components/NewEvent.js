import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

class NewEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      category: '',
      location: '',
      description: '',
      event_date: '',
      owner_id: 1,
      skill_level: '',
      event_pic: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    let newEvent = {}

    newEvent.name = this.state.name;
    newEvent.category = this.state.category;
    newEvent.location = this.state.location;
    newEvent.description = this.state.description;
    newEvent.event_date = this.state.event_date;
    newEvent.owner_id = 1,
    newEvent.skill_level = this.state.skill_level,
    newEvent.event_pic = this.state.event_pic;

    axios.post('/api/events', newEvent)
      .then((data) => {
        console.log("all data", data);
      })

  }
}
