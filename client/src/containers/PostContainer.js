import React, { Component } from "react";

import Posts from "../components/Posts";
import AddPostModal from "../components/PostModal";
import PostModel from "../models/Post";

class PostContainer extends Component {
  state = {
    showAddModal: false,
    postList: [],
  };

  toggleModal = () => {
      this.setState({ showAddModal: !(this.state.showAddModal) });
  };

  componentDidMount = () => {
    PostModel.getPosts(this.props.city)
      .then(response => {
        this.setState({ postList: response.data })
      })
      .catch(error => {
        console.log("in get posts error, ", error);
      })
  }

  render() {
    console.log(this.state.postList);
    
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
