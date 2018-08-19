import React, { Component } from "react";

import Modal from "react-modal";

class EditPost extends Component {
    render() {
        return(
            <Modal isOpen={this.props.isOpen} contentLabel="Sign In Modal" className="Modal" ariaHideApp={false}>
                <section className="modal-content">
                    <h1>Edit Post</h1>
                    <form className="modal-form">
                        <input type="text" placeholder="Username" name="username" id="login-username" />
                        <input type="password" placeholder="Password" name="login-password" id="login-password" />
                        <h6 id="error"> </h6>
                        <button className="login-button" onClick={this.signIn}>
                            Log In
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

export default EditPost;