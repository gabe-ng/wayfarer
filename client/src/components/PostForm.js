import React, { Component } from "react";

class PostForm extends Component {
  render() {
    return (
      <div className="PostForm">
        <form>
          <input type="text" />
          <input type="text" />
          <button>Edit post</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
