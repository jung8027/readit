import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router'

export const CreatePost = React.createClass({
	getInitialState(){
		return{
			title:'', body:''
		}
	},
	handleChange(inputType, input){
		this.setState({[inputType]: input.target.value})
	},
	handleClick(){
		$.ajax({
			url: '/api/post',
			type: 'POST',
			data: this.state
		})
		.done(this.setState({title:'', body:''}))
	},
	render(){
		return(
			<div>
				<input type='text' placeholder='TITLE' onChange={this.handleChange.bind(this, 'title')}/>
				<input type='text' placeholder='BODY' onChange={this.handleChange.bind(this, 'body')}/>
				<Link to='/'><input type='submit' onClick={this.handleClick}/></Link>
			</div>
		)
	}
})