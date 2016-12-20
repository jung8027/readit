import React from 'react';
import $ from 'jquery'
import Post from './Post'

const FrontPage = React.createClass({
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
		.then(posts => this.setState({Posts: posts}))
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

export default FrontPage