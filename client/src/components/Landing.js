import React, { Component } from "react";

import Carousel from './carousel/Carousel';
import Profile from './Profile';

class Landing extends Component {

    render () {
                let isLoggedIn = this.props.loggedIn;
                let bottomSection;

                // false is a string here because local storage saves as a string
                if (isLoggedIn !== "false") {
                  bottomSection = <Profile />;
                } else {
                  bottomSection = 
                  <div className="intro-info">
                    <p className="landing-statement">Exlore. Connect. Thrive.</p>
                  </div>
                }

                return <div className="landing-container">
                    <Carousel />
                    {bottomSection}
                  </div>;
              }
}

export default Landing;
