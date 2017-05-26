import React, {Component} from 'react';
import {Link} from 'react-router';

var style = {
    backgroundColor: '#c3d0e5',
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}
export default class Footer extends Component {
  render() {
    return (
      <div>
                <div style={phantom} />
                <div style={style}>
                    {this.props.children}
                    <p className="footText text-right">&copy; ACTIO Crew John Gallagher, Alexandra Tooley, Ryhs Goehring, Sean Kelly, and Samuel Miller </p>
                </div>
            </div>
    );
  }
}
