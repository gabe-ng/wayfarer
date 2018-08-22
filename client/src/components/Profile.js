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
        let newName = document.getElementById("edit-name").value;
        let newCurrentCity = document.getElementById("edit-currentCity").value;

        UserModel.updateProfile(localStorage.getItem("username"), newName, newCurrentCity)
            .then(response => {
                console.log("UPDATE PROFILE RESPONSE", response);
                
                this.setState({ 
                    user: response.data,
                    editMode: !(this.state.editMode) })
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
        console.log(this.state.user);
        
        let date = this.state.user.joinDate ? 
            this.state.user.joinDate.slice(0, 10) 
            : "";
        
        let editMode = this.state.editMode;
        let profileSection;

        let posts;
        if (this.state.user.posts != null) { 
            posts = this.state.user.posts.map(post => {
                let postDate = post.dateCreated.slice(0,10);
                return <p key={post._id}>{post.title} in {post.city} on {postDate}</p>
                })
            } else {
                posts = "No posts";
            }
        
        console.log(this.state.user.posts);
        
      
        if (!editMode) {
            profileSection = 
            <div className="profile-container">
                <h1 className="profile-title">
                  Welcome {this.state.user.username}!
                  <p className="profile-edit" onClick={this.toggleEditMode}>
                    (Edit Profile)
                  </p>
                </h1>
                <div className="profile-info">
                  <p>Full Name: {this.state.user.name}</p>
                  <p>Current City: {this.state.user.currentCity}</p>
                  <p>Date joined: {date}</p>
                </div>
                <div className="profile-posts">
                  <ul className="profile-posts-list">
                    Your posts: {posts}
                  </ul>
                </div>
            </div>;
            
        } else {
            profileSection = 
                <div className="profile-container">
                    <form className="profile-form">
                        <input type="text" defaultValue={this.state.user.name} id="edit-name" />                        <input type="text" defaultValue={this.state.user.currentCity} id="edit-currentCity" />
                        <button onClick={this.updateProfile}>Update profile</button>
                        <button onClick={this.toggleEditMode}>Cancel</button>
                    </form>
                </div>
        }
        return <div >
            {profileSection}
          </div>;
    }
}

export default Profile;