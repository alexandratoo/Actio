import React from 'react';
import {render} from 'react-dom';

import GMap from './gMap';

class EventMap extends React.Component {
  get initialCenter() {
    return { lng: -90.1056957, lat: 29.9717272 }
  }
  render () {
    return (
    <div className="col-sm-6">
      <GMap initialCenter={this.initialCenter} />
    </div>
  )
  }

}

export default EventMap
