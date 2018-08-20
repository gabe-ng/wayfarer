import React, { Component } from "react";

class PostForm extends Component {
    handleUpdate = (event) => {
        let title = document.getElementById("edit-title").value;
        let body = document.getElementById("edit-body").value;
        this.props.updatePost(event, this.props.id, title, body);
    }

  render() {
    return (
      <div className="post">
        <form className="post-form">
          <input
            type="text"
            defaultValue={this.props.title}
            className="edit-post-title"
            id="edit-title"
          />
          <textarea
            type="text"
            defaultValue={this.props.body}
            className="edit-post-text"
            id="edit-body">
          </textarea>
          <button onClick={this.handleUpdate} className="edit-post-submit">Edit post</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
