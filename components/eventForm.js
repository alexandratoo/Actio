import React, {Component} from 'react';
import axios from 'axios';
import EventMap from './eventMap';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId:'',
      zip:'',
      currentUser: null,
      categories: [],
      selected_category: 1,
      skill_levels: [],
      selected_skill_level: 'beginner',
      distances: [],
      selected_distance: '5',
      displayed_events: null,
      events: [],
      filteredEvents: [],
      selected_event: null
    }

    axios.get('/api/categories').then((response) => {
      console.log('cookie is?', document.cookie);
      this.setState({categories: response.data})
    });

    axios.get('/api/events/').then((response) => {
      this.setState({events: response.data})
    });

    this.joinEvent = this.joinEvent.bind(this);
    this.parseCookie = this.parseCookie.bind(this);
    this.handleChange = this.handleChange.bind(this);

    console.log(this.props);

  }

  handleChange(event) {
    const obj = {}
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }



  joinEvent(id){
    console.log('user id', this.state.userId);
    axios.post(`/api/events/${id}`, {userId:this.state.userId})
    .then((data)=>{
      this.props.history.push(`/events/${id}`);
    })
  }

  parseCookie(cookie){

    let cookieArray = cookie.split('; ')
    let cookieObject = {}
    cookieArray.forEach((element)=>{
      let current = element.split('=');
      cookieObject[current[0]] = current[1];
    })
    this.setState({userId:cookieObject.userId,zip:cookieObject.zip});
  }
  componentDidMount(){
    this.parseCookie(document.cookie);
  }

  renderCats(category, key) {
    return (
      <option value={category.id} key={key}>
        {category.title}
      </option>
    )
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <select onChange={this.handleChange} name="selected_category" className="col-sm-4">
            {this.state.categories.map(this.renderCats)}
          </select>
          <select onChange={this.handleChange} name="selected_skill_level" className="col-sm-4">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="master">Master</option>
          </select>
          <select onChange={this.handleChange}name="selected_distance" className="col-sm-4">
            <option value="5">5 Miles</option>
            <option value="10">10 Miles</option>
            <option value="20">20 Miles</option>
            <option value="50">50 Miles</option>
          </select>
        </div>
        <div className="row">
          <div className="container">
            <EventMap />
          </div>
        </div>
        <div className="row">
          <h1 className="text-center">Events For You</h1>
          {this.state.events.map((event, index) => {
            if (event.cat_id == this.state.selected_category && event.skill_level == this.state.selected_skill_level) {
            return (
              <div key={index} className="well well-lg">
                <div className="media-left">
                  <img src={event.event_pic} className="media-object eventPic"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading text-center">
                    <Link to={`/events/${event.id}`}>{event.name}</Link> at {event.event_date}</h4>
                  <div className="text-left">
                    {event.location}
                  </div>
                  <br />
                  <p className="text-left">{event.description}</p>
                  <button onClick={()=>this.joinEvent(event.id)} data-event={event.id} id="joinEventBtn">Join Event</button>
                </div>
              </div>
            )}
          })}
        </div>
      </div>
    )
  }
}

export default withRouter(EventForm)
