import React, { Component } from "react";

import Post from "./Post";

class Posts extends Component {

  toggleMoreContent = (event) => {
    if (event) event.preventDefault();

    
  }

  // componentDidUpdate = () => {
    
  //   document.querySelectorAll(".body-p").forEach(para => {
  //     let showChar = 500;
  //     let ellipsestext = "...";
  //     let moretext = "more";

  //     if (para.textContent.length > showChar) {
  //       let shown = para.textContent.substr(0, showChar);
  //       let hidden = para.textContent.substr(showChar - 1, para.textContent.length - showChar);

  //       let html = shown + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + hidden + '</span>&nbsp;&nbsp;<a href="" id="moreLink" class="morelink" onClick={this.toggleMoreContent}>' + moretext + '</a></span>';

  //       para.innerHTML = html;
  //     }
  //     console.log(para.textContent.substr(0, showChar));
  //     console.log(para.textContent.substr(showChar - 1, para.textContent.length - showChar));

  //   })
  // }

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
