import React from 'react';
import $ from 'jquery';

export const CreateComment = React.createClass({
  getInitialState() {
    return {comment: null}
  },
  handleChange(e) {
    this.setState({comment: e.target.value})
  },
  handleSubmit() {
    let PostId = this.props.PostId;
    $.ajax({
      //must contain the current post's id
      url: "/api/comment/",
      type: "POST",
      data: {
        PostId: PostId,
        comment: this.state.comment,
        UserId: UserId
      }
    })
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment"></label>
        <input type="text" name="comment" id="comment" placeholder="Comment" onChange={this.handleChange}></input><br />
        <input type="submit" value="Submit" id="submit"></input>
      </form>
    )
  }
})
