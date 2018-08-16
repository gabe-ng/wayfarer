import React, { Component } from "react";

import Cities from "../components/Cities";
import City from "../components/City";

class HomeContainer extends Component {
    state = {
        currentCity: null,
    }

    render() {
        return (
            <div>
                <Cities />
                <City />
            </div>
        )
    }
}

export default HomeContainer;