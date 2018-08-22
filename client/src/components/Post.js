import React, { Component } from "react";

import PostForm from "./PostForm";

class Post extends Component {

  toggleMoreText = () => {
    
  }

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

    let body;
    let showChar = 500;
    let ellipsestext = "...";
    let moretext = "more";

    if (this.props.body.length > showChar) {
      let shown = this.props.body.substr(0, showChar);
      let hidden = this.props.body.substr(
        showChar - 1,
        this.props.body.length - showChar
      );

      body = <p className="body-p more">
          {shown} <span className="moreellipses"> {ellipsestext} </span>
          <span className="morecontent">
            <span>{hidden}</span>
            &nbsp;&nbsp;
            <a href="" className="morelink" onClick={this.toggleMoreText}>
              {moretext}
            </a>
          </span>
        </p>;
    } else {
      body = this.props.body
    }

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
            {body}
            <p data-id={this.props.id} onClick={this.props.showDetail}>
              Show post details
            </p>
            {options}
          </div>
        )}
      </div>
    );
  }
}

export default Post;
