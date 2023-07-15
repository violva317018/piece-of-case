import React, { useState, useContext } from "react";
import "./scheme.css";
import SchemeProgress from "../components/SchemeProgress";
import { Link } from "react-router-dom";
import { GlobelDate } from "../App";

function Scheme() {
  // use content
  const { setInfoData } = useContext(GlobelDate);
  // recode progress
  const [finalPrice, setFinalPrice] = useState(0); // 最終金額
  const [progressStage, setProgressStage] = useState(0); // 排程階段次數
  const [schemeTextArea, setSchemeTextArea] = useState("");
  // handle Function
  const handleFinalPrice = (event) => {
    // 判斷是否低於最低價位，先假設最低金額500
    if (event.target.value < 500) {
      alert("低於最低價位 500");
      event.target.value = 500;
      return setFinalPrice(500);
    }
    setFinalPrice(event.target.value);
  };
  const handleScheme = (event) => {
    // 判斷是否高於排程階段
    if (event.target.value < 1) {
      alert("排程階段不正確");
      return (event.target.value = 1);
    }
    if (event.target.value > 6) {
      alert("最多排程6階段");
      return (event.target.value = 6);
    }
    setProgressStage(event.target.value);
  };
  return (
    <main className="container">
      <div className="scheme-box">
        {/* 金額 */}
        <div className="box">
          <h4>最終金額 :</h4>
          <input
            min={500}
            type="number"
            className="scheme-input"
            placeholder="請輸入最終的金額"
            onBlur={handleFinalPrice} // 假如失去焦點時會提醒是否低於最低價位
          />
        </div>

        {/* 進度排程 */}
        <div className="box">
          <h4>進度排程 :</h4>
          <input
            min={0}
            max={6}
            className="scheme-input"
            type="number"
            placeholder="請輸入共要分成幾階段完成(最多6階段)"
            onBlur={handleScheme}
          />
        </div>

        {/* 假如進度排程大於0，就顯示進度條 */}
        {progressStage > 0 && <SchemeProgress progressStatus={progressStage} />}

        {/* 顯示備註欄 */}
        <div className="box">
          <h4 htmlFor="caseMoney">備註 :</h4>
          <textarea
            className="scheme-textarea"
            onChange={(event) => {
              setSchemeTextArea(event.target.value);
            }}
          ></textarea>
        </div>

        {/* btn */}
        <div className="box d-flex justify-content-evenly">
          {/* 跳轉至哪裡 => 先跳到個人帳戶 > 提案紀錄 */}
          <Link to="/personalinfo" onClick={() => setInfoData("3")}>
            <button type="button" className="btn btn-primary">
              合作愉快
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Scheme;
