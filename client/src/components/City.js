import React, { Component } from "react";

import PostContainer from "../containers/PostContainer";
import SanFrancico from "../images/SanFrancisco.png";
import Dubai from "../images/Dubai.png";
import Sydney from "../images/Sydney.png";
import London from "../images/London.png";

class City extends Component {
  render() {

    let image = (this.props.city === "San Francisco") 
      ? <img src={SanFrancico} alt="Golden Gate Bridge" />
      : (this.props.city === "London") 
        ? <img src={London} alt="Big Ben" /> 
        : (this.props.city === "Sydney")
          ? <img src={Sydney} alt="Sydney Opera House" />
          : <img src={Dubai} alt="Burj Al Arab" />

    let country = (this.props.city === "San Francisco")
      ? <h3>United States</h3>
      : (this.props.city === "London")
        ? <h3>United Kingdom</h3>
        : (this.props.city === "Sydney")
          ? <h3>Australia</h3>
          : <h3>United Arab Emirates</h3>

    return (
      <div className="city-container">
        <section className="city-country-title">
          <div className="city-country-name">
            <h1>{this.props.city}</h1>
            {country}
          </div>
          <div className="city-country-image">
            {image}
          </div>
        </section>
        <PostContainer city={this.props.city}/>
      </div>
    );
  }
}

export default City;
