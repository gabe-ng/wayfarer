import React, { Component } from "react";

import Modal from "react-modal";

class SignInModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} contentLabel="Minimal Modal Example">
                <h1>Sign In</h1>
                <button onClick={this.props.closeModal}>Close Modal</button>
            </Modal>
        );
    }
}

export default SignInModal;
