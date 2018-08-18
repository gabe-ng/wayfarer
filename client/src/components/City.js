import React, { Component } from "react";

import PostContainer from "../containers/PostContainer";
import SanFrancico from "../images/SanFrancisco.png";

class City extends Component {
  render() {
    return (
      <div className="city-container">
        <section className="city-country-title">
          <div className="city-country-name">
            <h1>San Francisco</h1>
            <h3>United States</h3>
          </div>
          <div className="city-country-image">
            <img src={SanFrancico} alt="Golden Gate Bridge" />
          </div>
        </section>
        <PostContainer />
      </div>
    );
  }
}

export default City;
