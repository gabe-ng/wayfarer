import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Landing from '../components/Landing';
import HomeContainer from './HomeContainer';

class MainContainer extends Component {

    render() {
        return <div>
            <Switch>
                <Route path="/home" render={(props) => <HomeContainer {...props} loggedIn={this.props.loggedIn} />} />
                <Route path="/" exact render={(props) => <Landing {...props} loggedIn={this.props.loggedIn}/>} />
            </Switch>
          </div>;
    }
}

export default MainContainer;