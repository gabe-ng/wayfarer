import React, { Component } from "react";

import Cities from "../components/Cities";
import City from "../components/City";

class CityContainer extends Component {
  state = {
    currentCity: null
  };

  render() {
    return (
      <div className="homepage">
        <Cities city={this.state.currentCity} />
        <City city={this.state.currentCity} />
      </div>
    );
  }
}

export default CityContainer;
