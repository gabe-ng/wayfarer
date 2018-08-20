import React, { Component } from "react";

import Arrow from "./Arrow";
import ImageSlide from "./ImageSlide";

import London from "../../images/London.png";
import SanFrancisco from "../../images/SanFrancisco.png";
import Dubai from "../../images/Dubai.png";
import Sydney from "../../images/Sydney.png";

let imgUrls = [London, SanFrancisco, Dubai, Sydney]

class HomeCarousel extends Component {
  state = {
  currentImageIndex: 0
  }

  previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
    <div className="carousel" id="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;" />

        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />

        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;" />
    </div>
    );
  }
}

export default HomeCarousel;

