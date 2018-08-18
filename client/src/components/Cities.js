import React, { Component } from "react";

import London from "../images/London.png";
import SanFrancisco from "../images/SanFrancisco.png";
import Dubai from "../images/Dubai.png";
import Sydney from "../images/Sydney.png";

class Cities extends Component {
  render() {
    return (
      <div className="city-list-container">
        <h1>Cities</h1>
        <section className="city-list">
          <div className="city-list-item city-list-active">
            <img src={SanFrancisco} alt="Golden Gate Bridge" />
            <h2>San Francisco</h2>
          </div>
          <div className="city-list-item">
            <img src={London} alt="Big Ben" />
            <h2>London</h2>
          </div>
          <div className="city-list-item">
            <img src={Sydney} alt="Sydney Opera House" />
            <h2>Sydney</h2>
          </div>
          <div className="city-list-item">
            <img src={Dubai} alt="Burj Al Arab" />
            <h2>Dubai</h2>
          </div>
        </section>
      </div>
    );
  }
}

export default Cities;
