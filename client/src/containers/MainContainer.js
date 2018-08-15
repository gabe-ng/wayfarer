import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Landing from '../containers/Landing';
import HomeContainer from './HomeContainer';

class MainContainer extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/home' component={HomeContainer} />
                    <Route path='/' exact component={Landing} />
                </Switch>
            </div>
        )
    }
}

export default MainContainer;