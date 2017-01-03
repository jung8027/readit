import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router'

export const UserLogin = React.createClass({
	getInitialState(){
		return{
			SignUsername:'', SignPassword:'', LogUsername:'', LogPassword:''
		}
	},
	handleChange(inputType, input){
		this.setState({[inputType]: input.target.value})
	},
	signUpClick(){
		$.ajax({
			url: '/api/user',
			type: 'POST',
			data: {
				username: this.state.SignUsername,
				password: this.state.SignPassword
			}
		})
	},
	logInClick(){
		$.ajax({
			url:'/api/login',
			type: 'POST',
			data: {
				username: this.state.LogUsername,
				password: this.state.LogPassword
			}
		})
	},
	render(){
		return(
			<div>
				<div>
					<p>User Sign Up</p>
					<input type='text' placeholder='choose a username' onChange={this.handleChange.bind(this, 'SignUsername')}/>
					<input type='text' placeholder='password' onChange={this.handleChange.bind(this, 'SignPassword')}/>
					<Link to="/"><input type='submit' onClick={this.signUpClick}/></Link>
				</div>
				<div>
					<p>User Log In</p>
					<input type='text' placeholder='username' onChange={this.handleChange.bind(this, 'LogUsername')}/>
					<input type='text' placeholder='password' onChange={this.handleChange.bind(this, 'LogPassword')}/>
					<Link to="/"><input type='submit' onClick={this.logInClick}/></Link>
				</div>
			</div>
		)
	}
})