import React from 'react'
import {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import EventForm from './eventForm'
import EventMap from './EventMap'
import axios from 'axios';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []

    };
  }

  render() {

    return (

      <div>
        <Nav/>
        <div>
          <div className="row">
          <EventForm/>
          </div>
          <div className="row">
          <EventMap/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

}

export default Events
