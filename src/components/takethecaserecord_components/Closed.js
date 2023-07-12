import React from "react";
import "./closed.css";

function Closed() {
  return (
    <div>
      <div className="recordDiv3">
        <div className="d-flex align-items-center">
          <span className="span1 flex-grow-1">案件名稱</span>
          <span className="span1 flex-grow-1">報價金額</span>
          <span className="span1 flex-grow-1">結案日期</span>
          <span className="span1 del1">成交狀態</span>
        </div>
        <div className="d-flex align-items-center">
          <span className="span2 flex-grow-1">RWD網站設計</span>
          <span className="span2 flex-grow-1">5萬</span>
          <span className="span2 flex-grow-1">2023/07/12</span>
          <span className="span2 del1 colorG">已成交</span>
        </div>
      </div>
      <div className="recordDiv3">
        <div className="d-flex align-items-center">
          <span className="span1 flex-grow-1">案件名稱</span>
          <span className="span1 flex-grow-1">報價金額</span>
          <span className="span1 flex-grow-1">結案日期</span>
          <span className="span1 del1">成交狀態</span>
        </div>
        <div className="d-flex align-items-center">
          <span className="span2 flex-grow-1">RWD網站設計</span>
          <span className="span2 flex-grow-1">5萬</span>
          <span className="span2 flex-grow-1">2023/07/12</span>
          <span className="span2 del1 colorR">未成交</span>
        </div>
      </div>
    </div>
  );
}

export default Closed;
