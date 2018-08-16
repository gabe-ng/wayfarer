import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";

class Header extends Component {
  state = {
    showSignUpModal: false,
    showSignInModal: false
  };

  handleOpenModal = option => {
    if (option == "sign up") {
      this.setState({ showSignUpModal: true });
    } else if (option == "sign in") {
      this.setState({ showSignInModal: true });
    }
  };

  handleCloseModal = () => {
    this.setState({ showSignUpModal: false, showSignInModal: false });
  };

  render() {
    let isLoggedIn = this.props.loggedIn;
    let menu;

    if (!isLoggedIn) {
      menu = (
        <ul>
          <li>
            <button onClick={() => this.handleOpenModal("sign in")}>
              Sign In
            </button>
          </li>
          <li>
            <button onClick={() => this.handleOpenModal("sign up")}>
              Sign Up
            </button>
          </li>
        </ul>
      );
    } else {
      menu = (
        <ul>
          <li>
            <NavLink
              to="/homepage"
              activeClassName="active-nav"
              className="nav-item"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="active-nav"
              className="nav-item"
            >
              Profile
            </NavLink>
          </li>
          <li>Logout</li>
        </ul>
      );
    }

    return (
      <div className="navbar">
        <Link to={"/"} className="navbar-title">
          Wayfarer
        </Link>

        <SignUpModal
          isOpen={this.state.showSignUpModal}
          closeModal={this.handleCloseModal}
        />
        <SignInModal
          isOpen={this.state.showSignInModal}
          closeModal={this.handleCloseModal}
        />
        {menu}
      </div>
    );
  }
}

export default Header;
