import React, { Component } from "react";

import PostContainer from "../containers/PostContainer";

class City extends Component {
  render() {
    return (
      <div className="city-container">
        <h1>City</h1>
        <PostContainer />
      </div>
    );
  }
}

export default City;
