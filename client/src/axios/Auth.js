import axios from "axios"; // 引入 axios 工具

// 後端給的網址
const API_URL =
  "http://localhost/Full-Stack-Project/server/public/index.php/api";

class Auth {
  // class 內的 function 可以省略前綴
  signup(userName, email, password) {
    // 取得從後端回傳的資料
    // 現在要註冊所以要用 【post】
    // axios.method('網址',{ 傳給後端的參數 })
    return axios.post(API_URL + "/auth/signup", {
      userName,
      email,
      password,
    });
  }

  // 處理登入
  login(email, password) {
    return axios.post(API_URL + "/auth/login", {
      email,
      password,
    });
  }

  // 處理登出
  logout(token) {
    return axios.post(API_URL + "/auth/logout", {
      token,
    });
  }

  userInfo(email) {
    // 現在要取得資料所以要用 【get】
    // 利用網址參數傳遞給後端
    return axios.get(API_URL + `/auth/login/${email}`);
  }

  //帳戶資料
  //頭像修改
  uploadPhoto(headphoto) {
    return axios.post(API_URL + "/upload-photo", {
      headphoto,
    });
  }

  // 綠界測試
  order(item, itemNO, des, price) {
    // 現在要取得資料所以要用 【get】
    // 利用網址參數傳遞給後端
    return axios.post(API_URL + `/store`, {
      item,
      itemNO,
      des,
      price,
    });
  }
}

// new 一個 Auth 的實例 ，export default 默認導出 供其他程式直接引用
export default new Auth();
