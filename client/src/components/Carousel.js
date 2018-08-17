import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import BigBen from "../images/BigBen.jpg";
import GoldenGate from "../images/SanFrancisco.jpg";
import BurjAlArab from "../images/Dubai.jpg";
import OperaHouse from "../images/Sydney.jpg";

class HomeCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel-container">
        <div>
          <img src={BigBen} alt="Big Ben" />
          <p className="legend">London</p>
        </div>
        <div>
          <img src={GoldenGate} alt="Golden Gate Bridge" />
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
    );
  }
}

export default HomeCarousel;
