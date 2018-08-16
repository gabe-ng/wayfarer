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
                <h1>HOME</h1>
                <Cities />
                <City />
            </div>
        )
    }
}

export default HomeContainer;
