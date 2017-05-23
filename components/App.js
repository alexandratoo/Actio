import React from 'react'
import NavLink from './NavLink'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav" className="main-nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
