import React from 'react';
import $ from 'jquery';
import {CreateComment} from '../comment/CreateComment';
import {Vote} from '../vote/vote';
import {CommentDiv} from '../comment/CommentDiv';


export const PostPage = React.createClass({
  getInitialState() {
    return {post: null}
  },
  componentDidMount() {
    $.ajax({
      url: "/api/post/" + this.props.params.id,
      type: 'GET'
    })
    .done((data)=>{
        this.setState({post:data})
      }
    )
  },
  render() {
    if(!this.state.post) {
      return (<div>Loading...</div>)
    } else {
      let post = this.state.post
      let comments = this.state.post.Comments
      let id = this.props.params.id
      return (
        <div>
          {/*<Vote id={this.props.params.id}/>*/}
          <h1>{post.title}</h1>
          <div>{post.body}</div>
          <CreateComment PostId={id} />
          {comments ? comments.map((commentInfo, index)=>
          <CommentDiv key={index} PostId={id} Comments={commentInfo}/>)
          : <p>Be the first to leave a comment!</p>}
        </div>
      )
    }
  }
})
