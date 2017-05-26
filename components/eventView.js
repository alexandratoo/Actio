import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Main from './Main'
import axios from 'axios'
import EventMap from './eventMap'
import {Link} from 'react-router-dom';

class EventView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventV: [],
      eventMessages: [],
      eventUsers: []
    }
    let eventId = this.props.match.params.id
    axios.get(`/api/events/${eventId}`)
      .then((eventViewer) => {
        this.setState({eventV: eventViewer.data})
      })

    axios.get(`/api/events/${eventId}/messages`)
      .then((messages) => {
        this.setState({eventMessages: messages.data})
      })

    axios.get(`/api/events/${eventId}/users`)
      .then((users) => {
        console.log(users)
        this.setState({eventUsers: users.data})
      })
  }
  renderMessage(message, key) {
    return (
      <div key={key}>
      <h3>{message.title}</h3>
      <p>{message.body}</p>
      &nbsp;
      </div>
    )
  }

  renderUser(user, key) {
    return (
        <img style={{height:'70px', width:'70px',display:'inline'}} src={user.profile_pic} key={key} />
    )
  }

  render() {
    return (
      <div>
        <Nav />
          <div className = "card-block trip container col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
          <img className = "container-fluid full" style={{height:'200px', width:'750px'}}
          src={this.state.eventV.event_pic} />
          <h2 className="text-center eventTitle" style={{display:'center', marginLeft:'25px'}}>{this.state.eventV.name}</h2>
          <Link to={`/events/${this.props.match.params.id}/edit`}><button className="btn-warning centered">Edit Post</button></Link>
          <button className="btn-danger pull-right">Delete Post</button>
          <h3 className="text-center skill" style={{display:'block', marginLeft:'25px'}}>{this.state.eventV.skill_level}</h3>
          <p className="text-center" style={{display:'block', marginLeft:'25px'}}>{this.state.eventV.description}</p>
          <div className="mapMarg">
          <EventMap />
        </div>
          <h2 className = "messages text-center">Attending:</h2>
          {this.state.eventUsers.map(this.renderUser)}
          <h2 className = "messages text-center">Messages:</h2> &nbsp; <div >{this.state.eventMessages.map(this.renderMessage)}</div>&nbsp;
          <button className="waves-effect waves-light btn-primary centered">Add a message</button>

          </div>
      </div>
    )
  }

}
export default EventView
