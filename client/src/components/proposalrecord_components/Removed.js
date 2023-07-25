import React from "react";
import "./removed.css";

function Removed(props) {
  const { currentProposeCases } = props;

  return (
    <div>
      {currentProposeCases.length !== 0 ? (
        currentProposeCases.map((item) => (
          <div className="recordDiv3" key={item["caseID"]}>
            <div className="d-flex align-items-center">
              <span className="span1 flex-grow-1">案件名稱</span>
              <span className="span1 flex-grow-1">預算金額</span>
              <span className="span1 flex-grow-1">下架日期</span>
              <span className="span1 del1">操作</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="span2 flex-grow-1">{item["caseName"]}</span>
              <span className="span2 flex-grow-1">{item["budget"]}</span>
              <span className="span2 flex-grow-1">{item["updateTime"]}</span>
              <span className="span2 del1">
                <div className="del2">刪除</div>
                <div className="del2">修改</div>
              </span>
            </div>
          </div>
        ))
      ) : (
        <h1>尚未下架</h1>
      )}
    </div>
  );
}

export default Removed;
