import React from 'react';
import $ from 'jquery';

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
				<input type='submit' onClick={this.handleClick}/>
			</div>
		)
	}
})