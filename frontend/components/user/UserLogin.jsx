import React from 'react';
import $ from 'jquery';

export const UserLogin = React.createClass({
	getInitialState(){
		return{
			username:'', password:''
		}
	},
	handleChange(inputType, input){
		this.setState({[inputType]: input.target.value})
	},
	handleClick(){
		$.ajax({
			url: '/api/user',
			type: 'POST',
			data: this.state
		})
		.done(this.setState({title:'', body:''}))
	},
	render(){
		return(
			<div>
				<input type='text' placeholder='Username' onChange={this.handleChange.bind(this, 'username')}/>
				<input type='text' placeholder='Password' onChange={this.handleChange.bind(this, 'password')}/>
				<input type='submit' onClick={this.handleClick}/>
			</div>
		)
	}
})