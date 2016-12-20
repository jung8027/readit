import React from 'react';
import $ from 'jquery'
import Post from './Post'

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
		.done(posts => this.setState({Posts: posts}))
	},
	render(){
		console.log(this.state.Posts)
		return(
			<div>
			  {this.state.Posts ?
			   this.state.Posts.map((post, indx) => <Post key={indx} postData={post} />) 
			   : <p>No Posts Found!</p>}
			</div>
		)
	}
})

