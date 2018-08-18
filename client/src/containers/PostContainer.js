import React, { Component } from "react";

import Posts from "../components/Posts";

class PostContainer extends Component {
  render() {
    return (
      <div className="post-container">
        <section className="post-list-header">
          <h1>Posts</h1>
          <button className="add-post">Add post</button>
        </section>

        <Posts />
      </div>
    );
  }
}

export default PostContainer;
