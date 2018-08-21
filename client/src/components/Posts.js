import React, { Component } from "react";

import Post from "./Post";

class Posts extends Component {

  render() {
    let posts = this.props.posts.map(post => {
      return <Post 
        key={post._id}
        post={post}
        id={post._id}
        username={post.username}
        title={post.title}
        body={post.body}
        showDetail={this.props.showDetail}
        editing={this.props.editing}
        editPostId={this.props.editPostId}
        toggleEdit={this.props.toggleEdit}
        updatePost={this.props.updatePost}
        deletePost={this.props.deletePost}/>;
    });

    return <div className="post-list">{posts}</div>;
  }
}

export default Posts;
