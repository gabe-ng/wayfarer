import React, { Component } from "react";

import Posts from "../components/Posts";
import AddPostModal from "../components/PostModal";
import PostModel from "../models/Post";

class PostContainer extends Component {
  state = {
    showAddModal: false,
    postList: [],
    editingPost: false,
    editingPostId: null,
  };

  // Opens and closes modal for adding posts
  toggleModal = () => {
    this.setState({ showAddModal: !this.state.showAddModal });
  };

  // Fetches posts for a specific city
  fetchPosts = () => {
    PostModel.getPosts(this.props.city)
      .then(response => {
        this.setState({ postList: response.data });
      })
      .catch(error => {
        console.log("in get posts error, ", error);
      });
  };

  // Toggles editingPost state
  toggleEdit = (event) => {
    console.log("in toggle edit");

    this.setState({
      editingPost: !this.state.editing,
      editingPostId: event.target.getAttribute("data-id"),
    });
  }

  // Deletes a post if post is owned by user
  deletePost = (event) => {
    PostModel.deletePost(localStorage.getItem("username"), event.target.getAttribute('data-id'))
      .then(response => {
        console.log(response);
        this.fetchPosts();
      })
      .catch((error) => {
        console.log("in delete posts error, ", error);
      })

  }

  componentDidMount = () => {
    this.fetchPosts();
  };

  componentDidUpdate = () => {
    if (this.props.newCity) {
      this.fetchPosts();
      this.props.toggleCityUpdate();
    }
  };

  render() {
    console.log(this.state.postList);
    console.log(this.state.editingPost, this.state.editingPostId);
    

    return (
      <div className="post-container">
        <section className="post-list-header">
          <AddPostModal
            isOpen={this.state.showAddModal}
            closeModal={this.toggleModal}
            currentCity={this.props.city}
            fetchPosts={this.fetchPosts}
          />
          <h1>Posts</h1>
          <button className="add-post" onClick={this.toggleModal}>
            Add post
          </button>
        </section>
        <Posts 
          posts={this.state.postList}
          editing={this.state.editingPost}
          editPostId={this.state.editingPostId}
          toggleEdit={this.toggleEdit}
          deletePost={this.deletePost}/>
      </div>
    );
  }
}

export default PostContainer;
