import React, { Component } from "react";

import Carousel from './Carousel';
import Profile from './Profile';

class Landing extends Component {

    render () {
        let isLoggedIn = this.props.loggedIn;
        let bottomSection;

        if (isLoggedIn) {
            bottomSection = <Profile />
        } else {
            bottomSection = <h1>Filler text when not logged in</h1>
        }

        return (
            <div className="landing-container">
                <Carousel />
                {bottomSection}
            </div>
        )
    }
}

export default Landing;
