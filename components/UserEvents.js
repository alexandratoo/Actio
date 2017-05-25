import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import Nav from './Nav'
import Footer from './Footer'
import ToggleDisplay from 'react-toggle-display';

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
              <button onClick={() => this.handleClick()}>Messages</button>
              <div>
                <ToggleDisplay show={this.state.click}>
                  {event.messages.map((message, index2) => {
                    return (
                      <div key={index2}>
                        <h3>{message.title}</h3>
                        <p>{message.body}</p>
                      </div>
                    )
                  })}
                </ToggleDisplay>

              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default UserEvents
