import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {userId:''}
    this.parseCookie = this.parseCookie.bind(this);
  }
  parseCookie(cookie){
    let cookieArray = cookie.split('; ')
    let cookieObject = {}
    cookieArray.forEach((element)=>{
      let current = element.split('=');
      cookieObject[current[0]] = current[1];
    })
    this.setState({userId:cookieObject.userId});
  }
  componentDidMount(){
    this.parseCookie(document.cookie);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
          <a className="navbar-brand" ><img src="../images/ACTIO.png" alt="ActioLogo"/>
       </a>

            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to={`/users/${this.state.userId}`}>My Profile</Link></li>
              <li><Link to="/events">Find Events</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
