import React from "react";
import "./completed.css";

function Completed() {
  return (
    <div>
      <div className="recordDiv3">
        <div className="d-flex align-items-center">
          <span className="span1 flex-grow-1">案件名稱</span>
          <span className="span1 flex-grow-1">預算金額</span>
          <span className="span1 flex-grow-1">完成日期</span>
          <span className="span1 del1">成交對象</span>
        </div>
        <div className="d-flex align-items-center">
          <span className="span2 flex-grow-1">RWD網站設計</span>
          <span className="span2 flex-grow-1">5萬</span>
          <span className="span2 flex-grow-1">2023/07/12</span>
          <span className="span2 del1">張文彥</span>
        </div>
      </div>
      <div className="recordDiv3">
        <div className="d-flex align-items-center">
          <span className="span1 flex-grow-1">案件名稱</span>
          <span className="span1 flex-grow-1">預算金額</span>
          <span className="span1 flex-grow-1">完成日期</span>
          <span className="span1 del1">成交對象</span>
        </div>
        <div className="d-flex align-items-center">
          <span className="span2 flex-grow-1">RWD網站設計</span>
          <span className="span2 flex-grow-1">5萬</span>
          <span className="span2 flex-grow-1">2023/07/12</span>
          <span className="span2 del1">張文彥</span>
        </div>
      </div>
    </div>
  );
}

export default Completed;
