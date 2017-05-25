import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import Nav from './Nav'
import Footer from './Footer'



class UserEvents extends Component{
  constructor(props){
    super(props)
    this.state = {eventList:[], click: false}
    let userId = this.props.userId;
    axios.get(`/api/users/${userId}/events`)
      .then((events) =>{
        this.setState({eventList:events.data})
      })
  }
  render(){
    return(
      <div>
        <h1>My Events</h1>
        {this.state.eventList.map((event,index) =>{
          return (
            <div key={index} className="well">
              <div className="media-left">
                <img src={event.event_pic} className="media-object" />
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
              <button type="button" id={event.event_id} className="btn btn-primary" onSelect={event => this.setState({click: true})}>Message Board</button>
              <div>
                
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default UserEvents
