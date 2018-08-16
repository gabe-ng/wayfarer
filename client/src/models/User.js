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
}

export default UserModel;

