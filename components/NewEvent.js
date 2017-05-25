import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

class NewEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      cat_id: '',
      location: '',
      description: '',
      event_date: '',
      owner_id: 1,
      skill_level: '',
      event_pic: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    let newEvent = {}

    newEvent.name = this.state.name;
    newEvent.cat_id = this.state.cat_id;
    newEvent.location = this.state.location;
    newEvent.description = this.state.description;
    newEvent.event_date = this.state.event_date;
    newEvent.owner_id = 1;
    newEvent.skill_level = this.state.skill_level;
    newEvent.event_pic = this.state.event_pic;

    axios.post('/api/events', newEvent).then((data) => {
      this.props.history.push(`/events/${data.data[0].id}`)
    });

  }

  handleChange(event) {
    const obj = {}
    obj[event.target.name] = event.target.value;
    this.setState(obj);
    console.log('state is..', this.state)
  }

  render() {
    return (
      <div className="content">
        <div className="card-block container col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
          <form role="form" method="post" onSubmit={this.handleSubmit}>
            <h1 className="text-center">Create Event</h1>
            <input onChange={this.handleChange} type="text" name="name" id="eventName" className="form-control input-lg" placeholder="Event Name"/>
            <div className="row">
              <select onChange={this.handleChange} type="text" name="cat_id" className="form-control input-lg">
                <option defaultValue>Choose Category</option>
                <option value="1">Basketball</option>
                <option value="2">Hiking</option>
                <option value="3">Swimming</option>
                <option value="4">Climbing</option>
                <option value="5">Soccer</option>
                <option value="6">Golfing</option>
              </select>
            </div>
            <div className="row">
              <select onChange={this.handleChange} type="text" name="skill_level" id="newEventSkill" className="form-control input-lg">
                <option defaultValue>Choose Skill Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="master">Master</option>
              </select>
            </div>
            <div className="row">
              <input onChange={this.handleChange} type="text" name="event_pic" id="newEventPic" className="form-control input-lg" placeholder="Event Picture URL"/>
            </div>
            <div className="row">
              <input onChange={this.handleChange} type="date" name="event_date" id="newEventDate" className="form-control input-lg"/>
            </div>
            <div className="row">
              <input onChange={this.handleChange} type="text" name="description" id="newEventDesc" className="form-control input-lg" placeholder="Event Description"/>
            </div>
            <div className="row">
              <input onChange={this.handleChange} type="text" name="location" id="newEventLocal" className="form-control input-lg" placeholder="Event Location"/>
            </div>
            <div className="row btnrow">
              <div className="col-xs-12 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 "><input type="submit" value="CREATE EVENT" className="siteBtn btn btn-block btn-lg"/></div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default withRouter(NewEvent)
