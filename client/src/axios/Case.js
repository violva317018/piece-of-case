import axios from "axios"; // 引入 axios 工具

// 後端給的網址
const API_URL =
  "http://localhost/Full-Stack-Project/server/public/index.php/api/cases";

class Case {
  // 提案介面(proposal) => location = city,district
  addCase(
    userID,
    name,
    category,
    subCategory,
    budget,
    deadline,
    city,
    subCity,
    description,
    contactName,
    contactPhone,
    contactTime,
    status,
    imageA,
    imageB,
    imageC,
    imageD,
    imageE
  ) {
    return axios.post(API_URL + "/addCase", {
      userID,
      name,
      category,
      subCategory,
      budget,
      deadline,
      city,
      subCity,
      description,
      contactName,
      contactPhone,
      contactTime,
      status,
      imageA,
      imageB,
      imageC,
      imageD,
      imageE,
    });
  }

  // 取得所有刊登資料
  getCases(bigClassID, classID, cityID, districtID, page) {
    return axios.post(API_URL, {
      bigClassID,
      classID,
      cityID,
      districtID,
      page,
    });
  }

  // 取得地區分類
  getCitys() {
    return axios.get(API_URL + "/getCitys");
  }
  // 取得母類別
  getCategorys() {
    return axios.get(API_URL + "/getCategorys");
  }
}

// new 一個 Auth 的實例 ，export default 默認導出 供其他程式直接引用
export default new Case();
