import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    let isLoggedIn = true;
    let menu;

    if (!isLoggedIn) {
      menu = (
        <ul>
          <li>Sign In</li>
          <li>Sign up</li>
        </ul>
      );
    } else {
      menu = (
        <ul>
          <li>
            <NavLink to="/homepage" activeClassName="active-nav" className="nav-item">
              Home
            </NavLink>
          </li>
          <li>
                  <NavLink to="/" exact activeClassName="active-nav" className="nav-item">
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
        {menu}
      </div>
    );
  }
}

export default Header;
