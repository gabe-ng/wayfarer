import React, { Component } from "react";

import Modal from "react-modal";
import UserModel from "../models/User";

class SignInModal extends Component {
  signIn = event => {
    if (event) event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    UserModel.logIn(username, password)
      .then(response => {
        console.log(response.data);
        if (response.data === "success") {
          this.props.loginSuccess();
          this.props.closeModal();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        contentLabel="Sign In Modal"
        className="Modal"
        ariaHideApp={false}
      >
        <section className="sign-in-content">
          <h1>Sign In</h1>
          <form className="sign-in-form">
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
            />
            <input
              type="password"
              placeholder="Password"
              name="login-password"
              id="password"
            />
            <button className="login-button" onClick={this.signIn}>
              Log In
            </button>
          </form>
          <button className="close-modal" onClick={this.props.closeModal}>
            Exit
          </button>
        </section>
      </Modal>
    );
  }
}

export default SignInModal;
