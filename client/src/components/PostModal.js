import React, { Component } from "react";
import swal from "sweetalert";

import Modal from "react-modal";
import PostModel from "../models/Post";

class AddPostModal extends Component {
    emptyField = () => {
        let message = document.createElement("h6");
        message.textContent = "Please fill out all fields.";
        let errorBox = document.getElementById("error");
        errorBox.textContent = message.textContent;
    }

    createNewPost = (event) => {
        if (event) event.preventDefault();

        let title = document.getElementById("new-post-title").value;
        let body = document.getElementById("new-post-body").value;

        if (title === "" || body === "") {
            this.emptyField();
            swal("Oops", "Please fill out all fields.", "error");

        } else {
            PostModel.addPost(title, body, this.props.currentCity, localStorage.getItem("username"))
                .then(response => {
                    console.log(response);
                    this.props.closeModal();
                    swal("Added", "Your post has been added.", "success");
                    this.props.fetchPosts();
                })
                .catch(error => {
                    console.log("Error creating new post, ", error);
                    swal("Uh Oh", "There was an error on our part. Please try again.", "error");

                })
        }
    }

    render() {
        return(
            <Modal isOpen={this.props.isOpen} contentLabel="Add Post Modal" className="Modal" ariaHideApp={false}>
                <section className="modal-content">
                    <h1>Add a Post to {this.props.currentCity}</h1>
                    <form className="modal-form">
                        <input type="text" placeholder="Title*" name="new-post-title" id="new-post-title" />
                        <textarea className="new-post-text" id="new-post-body" placeholder="Content*"></textarea>
                        <h6 id="error"> </h6>
                        <button className="login-button" onClick={this.createNewPost}>
                            Add Post
                        </button>
                    </form>
                    <button className="close-modal" onClick={this.props.closeModal}>
                        Exit
                    </button>
                </section>
            </Modal>
        )
    }
}

export default AddPostModal;