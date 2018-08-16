import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    let isLoggedIn = true;
    let menu;

    if (!isLoggedIn) {
      menu = <ul>
            <li>Sign In</li>
            <li>Sign up</li>
            </ul>;
    } else {
      menu = <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Logout</li>
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
