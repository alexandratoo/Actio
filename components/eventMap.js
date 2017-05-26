import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import GMap from './gMap';

class EventMap extends React.Component {
  constructor(props){
    super(props)
    this.state ={eventLocations:[]};
  }
  get initialCenter() {
    return { lng:-105.2705 , lat: 40.0150 }
  }
  componentWillReceiveProps(){
    this.props.locations.forEach((location)=>{
      console.log('locations: ',location);
      let urlLocation = location.split(' ').join('+');
      console.log('url',urlLocation);
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlLocation}&key=AIzaSyAUsnqaHWBKSLbfZp6QxXiag9iZsjTvAiI`)
      .then((data)=>{
        let tempArray = this.state.eventLocations;
        if(tempArray.length < this.props.locations.length){
          console.log('already there');
          tempArray.push(data.data.results[0].geometry.location)
        }
        this.setState({eventLocations:tempArray}, ()=>{
          this.render();
        })

      })
    })
  }
  render () {
    console.log(this.state)
    return (
    <div className="center mapMarg">
      <GMap initialCenter={this.initialCenter} eventLocations={this.state.eventLocations} />
    </div>
  )
  }

}

export default EventMap
