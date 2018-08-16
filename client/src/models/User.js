import axios from "axios";

class UserModel {
  static logIn(username, password) {
    let request = axios.post("/api/user/login", {
      username: username,
      password: password
    });

    return request;
  }
}

export default UserModel;
