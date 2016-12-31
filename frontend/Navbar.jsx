import React from 'react';
import {Link} from 'react-router'
import {UserLogin} from './components/user/UserLogin'

export const Navbar = React.createClass({
  render() {
    return (
      <ul className='navbar'>
        <li><Link to="/">WELCOME TO READIT</Link></li>
        <li>hot</li>
        <li>new</li>
        <li>rising</li>
        <li>controversial</li>
        <li>top</li>
        <li>gilded</li>
        <li>wiki</li>
        <li>promoted</li>
        <li>sign up</li>
        <UserLogin />
      </ul>
    )
  }
})