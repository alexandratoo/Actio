import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
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
      this.setState({categories: response.data})
    });

    axios.get('/api/events/').then((response) => {
      this.setState({events: response.data})
    });
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
      <div>
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
          <div className="col-sm-6">
            <h1>Events For You</h1>
            {this.state.events.map((event, index) => {
              return (
                <div key={index} className="well">
                  <div className="media-left">
                    <img src={event.event_pic} className="media-object"/>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{event.name}</h4>
                    <div className="text-left">
                      {event.event_date}
                    </div>
                    <div className="text-right">
                      {event.location}
                    </div>
                    <p>{event.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="col-sm-6">
            <EventMap/>
          </div>
        </div>
      </div>
    )
  }
}

export default EventForm
