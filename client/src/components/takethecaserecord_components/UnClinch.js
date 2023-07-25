import React from "react";
import "./unclinch.css";

function UnClinch(props) {
  const { currentProposeCases, handleDelete } = props;

  return (
    <div>
      {currentProposeCases.map((item, index) => (
        // <div className="recordDiv3" key={item["caseId"]}>
        <div className="recordDiv3" key={index}>
          <div className="d-flex align-items-center">
            <span className="span1 flex-grow-1">案件名稱</span>
            <span className="span1 flex-grow-1">報價金額</span>
            <span className="span1 flex-grow-1">報價日期</span>
            <span className="span1 flex-grow-1 borderR">操作</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="span2 flex-grow-1">{item["caseName"]}</span>
            <span className="span2 flex-grow-1">{item["quotation"]}</span>
            <span className="span2 flex-grow-1">{item["報價日期"]}</span>
            <span
              className="span2 flex-grow-1 borderR"
              onClick={() => {
                handleDelete(item.caseID);
              }}
            >
              刪除
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UnClinch;
