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
        console.log(eventViewer.data.description)
        console.log(eventViewer.data)
        this.setState({eventV: eventViewer.data})
      })

    axios.get('/api/messages')
      .then((messages) => {
        console.log(messages.data)
        this.setState({eventMessages: messages.data[0]})
      })
  }
  render() {
    return (
      <div>
          <img style={{height:'100px', width:'100px',display:'inline'}}
          src={this.state.eventV.event_pic} />
          <h1 style={{display:'inline', marginLeft:'25px'}}>{this.state.eventV.name}</h1>
          <h3 style={{display:'inline', marginLeft:'25px'}}>{this.state.eventV.skill_level}</h3>
          <h3 style={{display:'inline', marginLeft:'25px'}}>{this.state.eventV.description}</h3>
          <h2 style={{display:'inline', marginLeft:'25px'}}>{this.state.eventMessages.title}</h2>
          <h4 style={{display:'inline', marginLeft:'25px'}}>{this.state.eventMessages.body}</h4>
      </div>
    )
  }

}
export default EventView
