import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

class NewEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      category: '',
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
    newEvent.category = this.state.category;
    newEvent.location = this.state.location;
    newEvent.description = this.state.description;
    newEvent.event_date = this.state.event_date;
    newEvent.owner_id = 1,
    newEvent.skill_level = this.state.skill_level,
    newEvent.event_pic = this.state.event_pic;

    axios.post('/api/events', newEvent).then((data) => {
      console.log("all data", data);
    });

  }

  handleChange(event) {
    const obj = {}
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div className="content">
        <div className="card-block container col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
          <form role="form" method="post" onSubmit={this.handleSubmit}>
            <h1 className="text-center">Create Event</h1>
            <input onChange={this.handleChange} type="text" name="name" id="eventName" className="form-control input-lg" placeholder="Event Name"/>
            <div class="row">
              <select onChange={this.handleChange} type="text" name="newEventCat" className="form-control input-lg" placeholder="Choose Category">
                <option value="basketball">Basketball</option>
                <option value="hiking">Hiking</option>
                <option value="swimming">Swimming</option>
                <option value="climbing">Climbing</option>
                <option value="soccer">Soccer</option>
                <option vakue="golfing">Golfing</option>
              </select>
            </div>
            <div class="row">
              <select onChange={this.handleChange} type="text" name="newEventSkill" id="newEventSkill" className="form-control input-lg" placeholder="Choose Skill Level">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="master">Master</option>
              </select>
            </div>
            <input onChange={this.handleChange} type="text" name="newEventZip" id="newEventZip" className="form-control input-lg" placeholder="Zip Code"/>
            <div class="row">
              <input onChange={this.handleChange} type="text" name="newEventPic" id="newEventPic" className="form-control input-lg" placeholder="Event Picture URL"/>
            </div>
            <div class="row">
              <input onChange={this.handleChange} type="text" name="newEventDate" id="newEventDate" className="form-control input-lg" placeholder="Date of Event"/>
            </div>
            <div class="row">
              <input onChange={this.handleChange} type="text" name="newEventLocation" id="newEventLocation" placeholder="Event Location"/>
            </div>
            <div class="row">
              <input onChange={this.handleChange} type="text" name="newEventDesc" id="newEventDesc" placeholder="Event Description"/>
            </div>
            <div class="row btnrow">
              <div class="col-xs-12 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 "><input type="submit" value="CREATE EVENT" className="siteBtn btn btn-block btn-lg"/></div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default NewEvent
