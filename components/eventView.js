import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Main from './Main'
import axios from 'axios'

class EventView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventV: [],
      eventMessages: []
    }
    let eventId = this.props.match.params.id
    console.log(eventId)
    axios.get(`/api/events/${eventId}`)
      .then((eventViewer) => {
        this.setState({eventV: eventViewer.data})
      })

    axios.get(`/api/events/${eventId}/messages`)
      .then((messages) => {
        console.log(messages.data)
        this.setState({eventMessages: messages.data})
      })
  }
  renderMessage(message, key) {
    return (
      <option key={key}>
        {message.title}
      </option>
    )
  }
  renderMessageBody(message, key) {
    return (
      <option key={key}>
        {message.body}
      </option>
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
          <h3 className="text-center skill" style={{display:'block', marginLeft:'25px'}}>{this.state.eventV.skill_level}</h3>
          <p className="text-center" style={{display:'block', marginLeft:'25px'}}>{this.state.eventV.description}</p>
          <h2 className = "messages text-center">Messages:</h2> &nbsp; <div className="messageTitle">{this.state.eventMessages.map(this.renderMessage)}</div>&nbsp;
          <div className="messageBody">{this.state.eventMessages.map(this.renderMessageBody)}</div>
          </div>
      </div>
    )
  }

}
export default EventView
