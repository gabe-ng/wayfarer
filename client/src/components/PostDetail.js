import React, { Component } from "react";

class PostDetail extends Component {
    render() {
        return (
            <div>
                postDetail
                <span onClick={this.props.exitDetail}>EXIT</span>
            </div>
        )
    }
}

export default PostDetail