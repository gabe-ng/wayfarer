import React, { Component } from "react";

import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import "./App.css";

class App extends Component {
  state = {
    userLoggedIn: false
  };

  render() {
    return (
      <div>
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
