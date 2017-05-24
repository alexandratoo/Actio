import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import Nav from './Nav'
import Footer from './Footer'



class UserEvents extends Component{
  constructor(props){
    super(props)
    this.state = {eventList:[]}
    let userId = this.props.userId;
    axios.get(`/api/users/${userId}/events`)
      .then((events) =>{
        console.log(events)
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
            <h3>{event.name}</h3>
            </div>
          )
        })}
      </div>
    )
  }
}

export default UserEvents
