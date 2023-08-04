import axios from "axios";

// 後端給的網址
const API_URL = " https://514d-118-163-218-100.ngrok-free.app/api/payment"; // 每次使用 ngrok 都要換

class Payment {
  // 發送訂單資訊
  pay(MerchantTradeNo, ItemName, TotalAmount, TradeDesc, caseID) {
    console.log("client ECPay");
    return axios.post(API_URL + "/pay", {
      MerchantTradeNo,
      ItemName,
      TotalAmount,
      TradeDesc,
      caseID,
    });
  }

  // 取得回傳資料
  callback() {
    return axios.post(API_URL + "/callback");
  }
}

export default new Payment();
