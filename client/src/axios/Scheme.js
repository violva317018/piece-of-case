import axios from "axios";

// 後端給的網址
const API_URL =
  "http://localhost/Full-Stack-Project/server/public/index.php/api/scheme";

class Scheme {
  // 傳入排程狀態 => 【SchemeProgress】
  newScheme(schemeJson, bidderID) {
    console.log(schemeJson, bidderID);
    return axios.post(API_URL + "/newCaseStep", {
      schemeJson,
      bidderID,
    });
  }
}

export default new Scheme();
