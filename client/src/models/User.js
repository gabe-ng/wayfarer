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

  static signUp(name, username, password, currentCity, joinDate) {
    let request = axios.post("http://localhost:3001/api/user/create", {
      name: name,
      username: username,
      password: password,
      currentCity: currentCity,
      joinDate: joinDate,
      image: "",
    });

    return request;
  }
}

export default UserModel;

