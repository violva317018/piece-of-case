import axios from "axios";

//後端給API位址
const API_URL = "";

class Auth {
  //註冊
  signUp(email, userName, passWord) {
    //註冊用POST
    return axios.post(API_URL + "/register", { email, userName, passWord });
  }
}
