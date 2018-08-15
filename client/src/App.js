import React, { Component } from "react";

import Navbar from "./components/Navbar";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  state = {
    userLoggedIn: false
  };

  render() {
    return (
      <div>
        <Navbar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
