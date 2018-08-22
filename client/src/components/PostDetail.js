import React, { Component } from "react";

class PostDetail extends Component {
    render() {
        let post = this.props.post;
        let date = post.dateCreated.slice(0,10);
        return (
            <div className="post-detail">
                <h3>{post.title}</h3>
                <h6>{post.city}</h6>
                <p>{post.body}</p>
                <p>By {post.username} on {date}</p>
                <p><span onClick={this.props.exitDetail}>EXIT</span></p>
            </div>
        )
    }
}

export default PostDetail;