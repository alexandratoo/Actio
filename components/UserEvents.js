import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import Nav from './Nav';
import Footer from './Footer';
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
      <div id="allEvents">
        <div className="row">
          {this.state.eventList.map((event, index) => {
            return (
              <div className="card-block trip container col-md-10 col-sm-4 col-xs-8 col-lg-8 col-xs-offset-2 col-lg-offset-2 col-md-offset-2">
                <div key={index} className="cardContent text-center">
                  <div className="media-center eventDiv">
                    <img src={event.event_pic} className="img-fluid center eventPic"/>
                  </div>
                  <div className="container text-center col-md-12 col-sm-12">
                    <div className="media-body">
                      <h4 className="media-heading text-center text-overflow">
                        {event.name} at {event.event_date}</h4>
                      <div className="text-center">
                        {event.location}
                      </div>
                      <br/>
                      <p className="text-center">{event.description}</p>
                    </div>
                  </div>
                  <div>
                    <button className='btn-custom messageButton' id="messageButton" onClick={() => this.handleClick()}>Messages</button>
                  </div>
                  <hr/>
                  <div>
                    <ToggleDisplay show={this.state.click}>
                      {event.messages.map((message, index2) => {
                        return (
                          <div key={index2} className="border-bottom-0">
                            <h4>{message.title}</h4>
                            <p id="messageId">{message.body}</p>
                          </div>
                        )
                      })}
                    </ToggleDisplay>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default UserEvents
