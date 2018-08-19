import React, { Component } from "react";

import Cities from "../components/Cities";
import City from "../components/City";

class CityContainer extends Component {
  state = {
    currentCity: "San Francisco"
  };

  setCitySanFrancisco = () => {
    this.setState({ currentCity: "San Francisco" });
  };

  setCityLondon = () => {
    this.setState({ currentCity: "London" });
  };

  setCitySydney = () => {
    this.setState({ currentCity: "Sydney" });
  };

  setCityDubai = () => {
    this.setState({ currentCity: "Dubai" });
  };

  render() {
    return (
      <div className="homepage">
        <Cities
          city={this.state.currentCity}
          toggleSf={this.setCitySanFrancisco}
          toggleLon={this.setCityLondon}
          toggleSyd={this.setCitySydney}
          toggleDub={this.setCityDubai}
        />
        <City city={this.state.currentCity} />
      </div>
    );
  }
}

export default CityContainer;
