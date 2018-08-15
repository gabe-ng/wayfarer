import React, { Component } from "React";

import Profile from './Profile';

class Landing extends Component {

    render () {
        return (
            <div>
                <h1>Landing</h1>
                <Profile />
            </div>
        )
    }
}

export default Landing;