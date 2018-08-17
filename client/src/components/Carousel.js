import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

import BigBen from "../assets/images/BigBen.jpeg";
import GoldenGate from "../assets/images/SanFrancisco.jpg";
import BurjAlArab from "../assets/images/Dubai.jpg";
import OperaHouse from "../assets/images/Sydney.jpg";

class HomeCarousel extends Component {
  render() {
    return (
      <div className="carousel-container">
        <Carousel>
          <div>
            <img src={BigBen} alt="Big Ben" />
            <p className="legend">London</p>
          </div>
          <div>
            <img
              src={GoldenGate}
              alt="Golden Gate Bridge"
            />
            <p className="legend">San Francisco</p>
          </div>
          <div>
            <img src={BurjAlArab} alt="Burj Al Arab" />
            <p className="legend">Dubai</p>
          </div>
          <div>
            <img src={OperaHouse} alt="Sydney Opera House" />
            <p className="legend">Sydney</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default HomeCarousel;
