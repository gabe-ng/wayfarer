import React, { Component } from "react";

import Navbar from "./components/Navbar";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  state = {
    userLoggedIn: false,
  };

  render() {
    return <div>
        <Navbar loggedIn={this.state.userLoggedIn} />
        <MainContainer loggedIn={this.state.userLoggedIn} />
      </div>;
  }
}

export default App;
