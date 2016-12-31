import React from 'react';
import $ from 'jquery';

export const CommentDiv = (props) => (
  <div>
    <h1>{props.Comments.User.username}</h1>
    <p>{props.Comments.comment}</p>
  </div>
)
