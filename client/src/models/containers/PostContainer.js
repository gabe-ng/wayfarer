import React, { Component } from "react";

import Posts from "../components/Posts";
import AddPostModal from "../components/PostModal";

class PostContainer extends Component {
  state = {
    showAddModal: false
  };

  toggleModal = () => {
      this.setState({ showAddModal: !(this.state.showAddModal) });
  };

  render() {
    return <div className="post-container">
        <section className="post-list-header">
          <AddPostModal isOpen={this.state.showAddModal} closeModal={this.toggleModal} />
          <h1>Posts</h1>
          <button className="add-post" onClick={this.toggleModal}>Add post</button>
        </section>
        <Posts />
      </div>;
  }
}

export default PostContainer;
