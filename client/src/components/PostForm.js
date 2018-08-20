import React, { Component } from "react";

class PostForm extends Component {
  render() {
    return (
      <div className="post">
        <form className="post-form">
          <input type="text" defaultValue={this.props.title} />
                <input type="text" defaultValue={this.props.body} />
          <button>Edit post</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
