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

      <div className="main">
        <Nav/>
        <div className="container">
          <div className="row">
          <EventForm/>
          <EventMap/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

}

export default Events