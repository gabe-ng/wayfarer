import React, { Component } from "react";
import swal from 'sweetalert';

import Modal from "react-modal";
import UserModel from "../models/User";

class SignInModal extends Component {
  signIn = event => {
    if (event) event.preventDefault();
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    UserModel.logIn(username, password)
      .then(response => {
        console.log(response.data);
        if (response.data === "success") {
          localStorage.setItem("username", username);
          localStorage.setItem("loggedIn", true);
          swal(`Welcome back ${localStorage.getItem("username")}!`);
          this.props.loginSuccess();
          this.props.closeModal();
        }
      })
      .catch(error => {
        console.log(error);
        swal("Whoops", "Incorrect username or password", "error");
        this.incorrectInfo();
      });
  };

  incorrectInfo = () => {
    let message = document.createElement("h6");
    message.textContent= "Incorrect username or password.";
    let errorBox = document.getElementById("error");
    errorBox.textContent = message.textContent;
  };

  render() {
    return <Modal isOpen={this.props.isOpen} contentLabel="Sign In Modal" className="Modal signin" ariaHideApp={false}>
        <section className="modal-content">
          <h1>Sign In</h1>
          <form className="modal-form">
            <input type="text" placeholder="Username" name="username" id="login-username" />
            <input type="password" placeholder="Password" name="login-password" id="login-password" />
            <h6 id="error"> </h6>
            <button className="login-button" onClick={this.signIn}>
              Log In
            </button>
          </form>
          <button className="close-signin" onClick={this.props.closeModal}>
            Exit
          </button>
        </section>
      </Modal>;
  }
}

export default SignInModal;
