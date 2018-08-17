import React, { Component } from "react";

import UserModel from "../models/User";

class Profile extends Component {
    state = {
        editMode: false,
        user: '',
    }

    toggleEditMode = () => {
        console.log("switching to edit mode");
        let status = !(this.state.editMode)
        this.setState({ editMode: status })
    }

    updateProfile = (event) => {
        if (event) event.preventDefault();
        let newUsername = document.getElementById("edit-username").value;
        let newCurrentCity = document.getElementById("edit-currentCity").value;

        UserModel.updateProfile(localStorage.getItem("username"), newUsername, newCurrentCity)
            .then(response => {
                this.setState({ 
                    user: response.data,
                    editMode: !(this.state.editMode) })
                localStorage.setItem("username", response.data.username);
            })
            .catch(error => {
                console.log("in update error: ", error);
                
            })
    }


    componentDidMount = () => {
        console.log("Profile mounted");
        UserModel.getInfo(localStorage.getItem("username"))
            .then(response => {
                console.log(response);
                this.setState({ user: response.data });
            })
            .catch(error => {
                console.log("In profile catch error: ", error);
                
            })
    }

    render() {  
        let date = this.state.user.joinDate ? 
            this.state.user.joinDate.slice(0, 10) 
            : "";
        
        let editMode = this.state.editMode;
        let profileSection;

        if (!editMode) {
            profileSection = 
            <div className="profile-container">
                <h1 className="profile-title">
                  Welcome {this.state.user.username}!<span className="profile-edit" onClick={this.toggleEditMode}>
                    (Edit Profile)
                  </span>
                </h1>
                <div className="profile-info">
                  <p>Full Name: {this.state.user.name}</p>
                  <p>Current City: {this.state.user.currentCity}</p>
                  <p>Date joined: {date}</p>
                  <ul className="profile-posts">
                    Your posts: {this.state.user.posts}
                  </ul>
                </div>
            </div>;
            
        } else {
            profileSection = 
                <div className="profile-container">
                    <form>
                        <input type="text" defaultValue={this.state.user.username} id="edit-username" />
                        <input type="text" defaultValue={this.state.user.currentCity} id="edit-currentCity" />
                        <button onClick={this.updateProfile}>Update profile</button>
                    </form>
                </div>
        }
        return <div >
            {profileSection}
          </div>;
    }
}

export default Profile;