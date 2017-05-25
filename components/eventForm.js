import React, {Component} from 'react';
import axios from 'axios';
import EventMap from './eventMap';

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      categories: [],
      selectedCategory: null,
      skill_levels: [],
      selected_skill_level: null,
      distances: [],
      selected_distance: null,
      displayed_events: null,
      events: [],
      selected_event: null
    }

    axios.get('/api/categories').then((response) => {
      console.log('cookie is?', document.cookie);
      this.setState({categories: response.data})
    });

    axios.get('/api/events/').then((response) => {
      this.setState({events: response.data})
    });
  }

  filterEvents() {

  }

  renderCats(category, key) {
    return (
      <option key={key}>
        {category.title}
      </option>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <select name="catSelect" className="col-sm-4">
            {this.state.categories.map(this.renderCats)}
          </select>
          <select name="skillSelect" className="col-sm-4">
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Master">Master</option>
          </select>
          <select name="distance" className="col-sm-4">
            <option value="5">5 Miles</option>
            <option value="10">10 Miles</option>
            <option value="20">20 Miles</option>
            <option value="50">50 Miles</option>
          </select>
        </div>
        <div className="row">
          <div className="container">
            <EventMap />
          </div>
        </div>
        <div className="row">
          <h1 className="text-center">Events For You</h1>
          {this.state.events.map((event, index) => {
            return (
              <div key={index} className="well well-lg">
                <div className="media-left">
                  <img src={event.event_pic} className="media-object"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading text-center">
                    {event.name} at {event.event_date}</h4>
                  <div className="text-left">
                    {event.location}
                  </div>
                  <br />
                  <p className="text-left">{event.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default EventForm
