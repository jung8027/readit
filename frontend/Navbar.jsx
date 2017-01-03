import React from 'react';
import {Link} from 'react-router'
import $ from 'jquery'

export const Navbar = React.createClass({
  logout(){
    $.ajax({
      url: '/api/login',
      type: 'DELETE'
    })
  },
  render(){
    return(
      <div id='navbar'>
        <p className='titlelink'><Link to="/">WELCOME TO READIT</Link></p>
        {this.props.userStatus ? 
          <div className='login'>
            <p>{'Welcome ' + this.props.userStatus.username}</p>
            <button onClick={this.logout}><Link to='/'>Log out</Link></button> 
          </div>
          : <p className='login'><Link to='/login'>Log in or sign up</Link></p> }
      </div>
  )}
})