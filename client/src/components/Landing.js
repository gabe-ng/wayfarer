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
                    <article className="intro-1">
                      <p><span>Explore</span> your favorite cities across the world.</p>
                    </article>
                    <article className="intro-2">
                      <p><span>Connect</span> with a community that shares a passion for traveling.</p>
                    </article>
                    <article className="intro-3">
                      <p><span>Bring</span> your dreams to life.</p>
                    </article>
                  </div>
                }

                return <div className="landing-container">
                    <Carousel />
                    {bottomSection}
                  </div>;
              }
}

export default Landing;
