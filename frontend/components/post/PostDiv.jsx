import React from 'react'
import {Link} from 'react-router'

export const PostDiv = (props) =>(
	<div>
		<Link to={'/post/'+props.postData.id}><h2>{props.postData.title}</h2></Link>
		<Link to={'/post/'+props.postData.id}><p>Comments: {props.postData.Comments.length}</p></Link>
		<p>Votes: {props.postData.Votes.length}</p>
	</div>
)
