import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Main from './Main'
import axios from 'axios'

class EventView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventView: [],
      eventMessages: []
    }
    let eventId = this.props.match.params.id
    console.log(eventId)
    axios.get(`/api/events/${eventId}`)
      .then((eventViewer) => {
        this.setState({eventView: eventViewer.data})
      })

    axios.get('/api/messages')
      .then((messages) => {
        this.setState({eventMessages: messages.data[0]})
      })
  }
  render() {
    return (
      <div>
        <Nav />
          <img style={{height:'100px', width:'100px',display:'inline'}}
          src={this.state.eventViewer.event_pic} />
          <h1 style={{display:'inline', marginLeft:'25px'}}>{this.state.eventViewer.title}</h1>
          <h3 style={{display:'inline', marginLeft:'25px'}}>{this.state.eventViewer.description}</h3>
        <Footer />
      </div>
    )
  }

}
export default EventView
