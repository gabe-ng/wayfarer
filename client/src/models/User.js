import axios from "axios";

class UserModel {
  static logIn(username, password) {
    let request = axios.post("http://localhost:3001/api/user/login", {
      username: username,
      password: password
    });
    console.log(request);
    
    return request;
  }

  static signUp(name, username, password, currentCity) {
    console.log("in axios sign up");

    let request = axios.post("http://localhost:3001/api/user/create", {
      name: name,
      username: username,
      password: password,
      currentCity: currentCity,
      image: "",
    });

    return request;
  }

  static getInfo (username) {
    let request = axios.post("http://localhost:3001/api/user", {username: username});

    return request;
  }
}

export default UserModel;

