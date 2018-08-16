import React, { Component } from "react";

import Navbar from "./components/Navbar";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  state = {
    userLoggedIn: false,
  };

  toggleUserStatus = () => {
    console.log("user logging in");
    let status = !this.state.userLoggedIn;
    this.setState({ userLoggedIn: status})
  }

  render() {
    return <div>
        <Navbar loggedIn={this.state.userLoggedIn} loginSuccess={this.toggleUserStatus}/>
        <MainContainer loggedIn={this.state.userLoggedIn} />
      </div>;
  }
}

export default App;
