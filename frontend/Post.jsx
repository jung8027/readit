import React from 'react'

const Post = (props) =>(
	<div>
		<h2>{props.postData.title}</h2>
		<p>Comments: {props.postData.Comments.length}</p>
		<p>Votes: {props.postData.Votes.length}</p>
	</div>
)

export default Post