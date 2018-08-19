import React, { Component } from "react";

import Posts from "../components/Posts";
import EditPost from "../components/PostModal";

class PostContainer extends Component {
  state = {
    showEditModal: false
  };

  toggleModal = () => {
      this.setState({ showSignUpModal: !(this.state.showEditModal) });
  };

  render() {
    return <div className="post-container">
        <section className="post-list-header">
          <h1>Posts</h1>
          <button className="add-post" onClick={this.toggleModal}>Add post</button>
        </section>
        <Posts />
      <EditPost isOpen={this.state.showSignInModal} closModal={this.state.toggleModal}/>
      </div>;
  }
}

export default PostContainer;
