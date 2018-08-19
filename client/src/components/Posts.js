import React, { Component } from "react";

import Post from "./Post";

class Posts extends Component {
  render() {
    let posts = this.props.posts.map(post => {
      return <Post key={post._id} post={post}/>;
    });

    return <div className="post-list">{posts}</div>;
  }
}

export default Posts;
