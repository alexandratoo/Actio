import React from 'react'
import { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';

class Events extends React.Component {
  constructor(props) {
    super(props);


  this.state = { categoryList : [] };



  }


  render() {

    return (

      <div className="main">
        <Nav/>
        <div id="container">
          <h1 className="text-center">Select a Category:</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <a href="#" className="thumbnail">
              <img src="http://images.eastbay.com/pi/0499801/large/nike-swoosh-mini-basketball" alt="Basketball" />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="#" className="thumbnail">
              <img src="https://i2.wp.com/thebigoutside.com/wp-content/uploads/2015/05/Whi15-009.jpg?resize=200%2C200&ssl=1" alt="Hiking" />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="#" className="thumbnail">
              <img src="http://cdn-img.health.com//sites/default/files/wp_migrated_images/reasons-to-keep-swimming-200x200.jpg" alt="Swimming" />
            </a>
          </div>
        </div>
        <Footer/>
      </div>

    )
  }

}

export default Events
