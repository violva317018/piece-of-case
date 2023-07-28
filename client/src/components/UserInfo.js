import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userinfo.css";
import Case from "../axios/Case";
import { GlobelDate } from "../App";

function UserInfo(props) {
  const navigate = useNavigate()
  // 取得全域變數
  const { userID, currentCaseId } = useContext(GlobelDate);
  // 從 CaseView 取得資料
  const { budget, contactName, caseState, userEqual, profilePhoto } = props;

  // caseID , userID , quotation , win , selfRecommended
  const [quotation, setQuotation] = useState(0); // 報價金額
  const [win, setWin] = useState(false); // 預設
  const [selfRecommended, setSelfRecommended] = useState(""); // 自我推薦
  // 將報價者資料傳至資料庫
  const handleBidder = () => {
    Case.newBidder(currentCaseId, JSON.parse(localStorage.getItem('userID')), quotation, win, selfRecommended)
      .then((result) => {
        console.log(result);
        navigate('/personalinfo')
      })
      .catch((error) => {
        console.error(error);
        alert(error)
      });
  };
  return (
    <div className="user-info">
      {/* 案主資訊 */}
      <h1 className="text-center ">案主資訊</h1>
      <div className="d-flex justify-content-evenly">
        <img
          src={`data:image/jpeg;base64, ${profilePhoto}`}
          width={"100"}
          alt="img"
        />
        <div className="profile-info">
          {/* <p>XXX股份有限公司</p> */}
          {/* <p>{contactName}</p> */}
        </div>
      </div>
      <p>案主自介............................</p>

      {/* 假如未報價介面 */}
      {caseState === "未報價" && (
        <>
          {/* 自我推薦 */}
          <div className="input-group input-group-lg">
            <span
              className="input-group-text"
              id="inputGroup-sizing-lg"
              style={{ padding: "0" }}
            >
              自我推薦
            </span>
            <textarea
              type="text"
              rows={"5"}
              style={{ margin: 0 }}
              className="form-control"
              placeholder="請輸入您的自我推薦"
              onChange={(e) => {
                setSelfRecommended(e.target.value);
              }}
            ></textarea>
          </div>
          {/* 顯示報價需花多少錢 */}
          <div>此任務報價需花費 {budget * 0.01}元</div>
          {/* 報價金額 */}
          <div className="input-group input-group-lg">
            <span
              className="input-group-text"
              id="inputGroup-sizing-lg"
              style={{ padding: "0" }}
            >
              報價金額
            </span>
            <input
              type="text"
              style={{ margin: 0 }}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              placeholder="請輸入您的報價"
              onChange={(e) => {
                setQuotation(e.target.value);
              }}
            />
          </div>
          {/* 我要報價 */}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleBidder}
          >
            我要報價
          </button>
        </>
      )}

      {/* 假如已報價介面 */}
      {/* 需再調整 */}
      {caseState === "已報價" && (
        <>
          <button type="button" className="btn btn-secondary">
            已報價
          </button>
        </>
      )}
    </div>
  );
}

export default UserInfo;
