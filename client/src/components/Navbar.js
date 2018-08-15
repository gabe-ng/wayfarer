import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    let isLoggedIn = false;
    let menu;

    if (!isLoggedIn) {
      menu = <ul>
            <li>Sign In</li>
            <li>Sign up</li>
            </ul>;
    } else {
      menu = <ul>
            <li>Log Out</li>
            <li>Profile</li>
            <li>Home</li>
            </ul>;
    }

    return (
      <div className="navbar">
        <Link to={"/"} className="navbar-title">
          Wayfarer
        </Link>
        {menu}
      </div>
    );
  }
}

export default Header;
