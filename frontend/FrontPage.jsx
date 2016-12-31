import React from 'react';
import $ from 'jquery'
import {PostDiv} from './components/post/PostDiv'
import {Link} from 'react-router'

export const FrontPage = React.createClass({
	getInitialState(){
		return{
			Posts: null
		}
	},
	componentDidMount(){
		$.ajax({
			url: '/api/post',
			type: 'GET'
		})
		.done((posts) => {
			this.setState({Posts: posts})
			console.log(posts)
		})
	},
	render(){
		console.log(this.state.Posts)
		return(
			<div>
			<Link to='/form'><button> SUBMIT A POST </button></Link>
			  {this.state.Posts ?
			   this.state.Posts.map((post, indx) => <PostDiv key={indx} postData={post} />) 
			   : <p>No Posts Found!</p>}
			</div>
		)
	}
})

