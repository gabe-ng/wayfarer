import React, { Component } from "react";

import Post from "./Post";

class Posts extends Component {
    render() {
        return (
            <div className="post-list">
                <h1>This list will contain my posts</h1>
                <Post />
            </div>
        );
    }
}

export default Posts;
