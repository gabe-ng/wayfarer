import React, { Component } from "react";

import UserModel from "../models/User";

class Profile extends Component {
    state = {
        user: '',
    }

    componentDidMount = () => {
        console.log("Profile mounted");
        
        
        UserModel.getInfo(localStorage.getItem("username"))
            .then(response => {
                console.log(response);
                this.setState({ user: response.data })
            })
            .catch(error => {
                console.log("In profile catch error: ", error);
                
            })
    }

    render() {        
        return (
            <div className="profile-container">
                <h1>Profile</h1>
            </div>
        )
    }
}

export default Profile;