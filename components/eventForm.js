import React, { Component } from 'react';
import axios from 'axios';

class EventForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null,
      categories: [],
      selectedCategory: null,
      skill_levels: [],
      selected_skill_level: null,
      distances: [],
      selected_distance: null,
      events: []
      selected_event: null
    }

    this.onInputChange = this.onInputChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({


    })
  }




  render() {
    <table className="table table-hover">
      <thead>Events</thead>
      <tbody>
        {this.props.events.map}
      </tbody>
    </table>
  }
}
