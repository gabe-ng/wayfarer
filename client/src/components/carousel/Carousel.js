import React, { Component } from "react";

import Arrow from "./Arrow";
import ImageSlide from "./ImageSlide";

import London from "../../images/London.png";
import SanFrancisco from "../../images/SanFrancisco.png";
import Dubai from "../../images/Dubai.png";
import Sydney from "../../images/Sydney.png";

let imgUrls = [Dubai, London, SanFrancisco, Sydney];
let cities = ["Dubai", "London", "San Francisco", "Sydney"];

class HomeCarousel extends Component {
  state = {
    currentImageIndex: 0,
    timer: 5,
    currentTimeout: null
  };

  previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
      timer: 5
    });
  };

  decrementTime = () => {
    if (this.state.timer === 0) {
      this.setState({
        currentTimeout: window.clearInterval(this.decrementTime),
      });
      this.nextSlide();
    } else {
      this.setState({
        timer: this.state.timer - 1
      });
    }
  };

  componentDidMount = () => {
    this.setState({
      currentTimeout: window.setInterval(this.decrementTime, 1000)
    });
  }

  componentDidUpdate = () => {
    console.log(this.state.timer);
  };

  render() {
    return (
      <div className="carousel" id="carousel">
        <ImageSlide
          url={imgUrls[this.state.currentImageIndex]}
          city={cities[this.state.currentImageIndex]}
        />

        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />

        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </div>
    );
  }
}

export default HomeCarousel;

