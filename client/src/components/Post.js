import React, { Component } from "react";

import PostForm from "./PostForm";

class Post extends Component {
  render() {
    let options;

    // A user can see the edit and delete options only if they are the post creators
    if (this.props.username === localStorage.getItem("username")) {
      options = (
        <div>
          <span onClick={this.props.toggleEdit} data-id={this.props.post._id}>
            (Edit Post)
          </span>{" "}
          |{" "}
          <span onClick={this.props.deletePost} data-id={this.props.post._id}>
            (Delete Post)
          </span>
        </div>
      );
    } else {
      options = <p>Posted by {this.props.username}</p>;
    }
    console.log(this.props.id);

    return (
      <div>
        {this.props.editPostId === this.props.id ? (
          <PostForm
            id={this.props.id}
            title={this.props.title}
            body={this.props.body}
            updatePost={this.props.updatePost}
          />
        ) : (
          <div className="post">
            <h1>{this.props.post.title}</h1>
            <p>{this.props.post.body}</p>
            {options}
          </div>
        )}
      </div>
    );
  }
}

export default Post;
