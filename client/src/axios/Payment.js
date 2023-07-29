import axios from "axios";

// 後端給的網址
const API_URL =
  "https://5398-2001-b011-9807-59a3-714d-fb29-35af-f071.ngrok-free.app/index.php/api/payment";
// const API_URL =
//   "http://localhost/Full-Stack-Project/server/public/index.php/api/payment";

class Payment {
  // 發送訂單資訊
  pay(MerchantTradeNo, ItemName, TotalAmount, TradeDesc) {
    console.log("client ECPay");
    return axios.post(API_URL + "/pay", {
      MerchantTradeNo,
      ItemName,
      TotalAmount,
      TradeDesc,
    });
  }

  // 取得回傳資料
  callback() {
    return axios.get(API_URL + "/callback");
  }
}

export default new Payment();
