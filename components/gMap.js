import React from 'react';
import axios from 'axios';

export default class GMap extends React.Component {
  static propTypes() {
    initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
  }

  constructor(props){
    super(props);
    this.state = { zoom: 10 , markers:[]};
    this.clearMarkers = this.clearMarkers.bind(this);
  }

  render() {
    return <div className="GMap">
      <div className='GMap-canvas' ref="mapCanvas">
      </div>
    </div>
  }

  componentDidMount() {
    this.map = this.createMap()
    this.infoWindow = this.createInfoWindow()
    console.log("this did mount", this)
    google.maps.event.addListener(this.map, 'zoom_changed', () => this.handleZoomChange())
  }

  componentDidUnMount() {
    google.maps.event.clearListeners(map, 'zoom_changed')
  }

  componentWillReceiveProps(){
    console.log('GMAPS PROPS', this.props)
    this.clearMarkers();
    if(this.props.eventLocations != undefined){
      console.log('IN THE IF STATEMENT')
      this.props.eventLocations.forEach((location)=>{
        this.addMarkers(location);
      })
    }
  }

  createMap() {
    let mapOptions = {
      zoom: this.state.zoom,
      center: this.mapCenter()
    }
    return new google.maps.Map(this.refs.mapCanvas, mapOptions)
  }

  saySomething(){
    console.log(hello);
  }

  mapCenter() {
    console.log(this.state)
    return new google.maps.LatLng(
      this.props.initialCenter.lat,
      this.props.initialCenter.lng
    )
  }

  createMarker() {
    return new google.maps.Marker({
      position: this.mapCenter(),
      map: this.map
    })
	}

  clearMarkers(){
    if(this.state.markers.length != 0){
      for (var i = 0; i < this.state.markers.length; i++) {
        this.state.marker[i].setMap(null)
      }
    }
  }

  addMarkers(location){
    console.log('in here');
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(location.lat,location.lng),
      map: this.map
    })
    let tempArray = this.state.markers;
    tempArray.push(marker);
    this.setState({marker:tempArray})
    return marker
  }

  createInfoWindow() {
    let contentString = "<div class='InfoWindow'>Info</div>"
    return new google.maps.InfoWindow({
      map: this.map,
      anchor: this.marker,
      content: contentString
    })
  }

}
