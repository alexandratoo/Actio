import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Footer extends Component {
  render() {
    return (
      <footer className = "footer">
        <div className = "container">
          <span className = "text-muted">Copyright &copy; ACTIO</span>
        </div>
      </footer>
    );
  }
}
