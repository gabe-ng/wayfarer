import React, { Component } from "react";

import Posts from "../components/Posts";

class PostContainer extends Component {
  render() {
    return (
      <div className="post-container">
        <h1>Post Container</h1>
        <Posts />
      </div>
    );
  }
}

export default PostContainer;
