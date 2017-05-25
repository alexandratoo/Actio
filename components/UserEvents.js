import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import Nav from './Nav'
import Footer from './Footer'
import ToggleDisplay from 'react-toggle-display';
import EventMap from './eventMap';

class UserEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventList: [],
      click: false
    }
    let userId = this.props.userId;
    axios.get(`/api/users/${userId}/events`).then((events) => {
      this.setState({eventList: events.data})
    })
  }

  handleClick() {
    this.setState({
      click: !this.state.click
    });
  }

  render() {
    return (
      <div>
        <h1>My Events</h1>
        {this.state.eventList.map((event, index) => {
          return (
            <div>
            <div className="row">
              <div className="container">
                <EventMap />
              </div>
            </div>
            <div className="row">
              <h1 className="text-center">Events For You</h1>
              {this.state.eventList.map((event, index) => {
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
                      <p className="text-left">{event.description}</p>
                    </div>
                </div>
                )
              })}
            </div>
          </div>
          )
        })}
      </div>
    )
  }
}

export default UserEvents
