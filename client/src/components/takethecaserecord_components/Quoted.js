import React from "react";
import "./quoted.css";

function Quoted(props) {
  const { currentRecordCases } = props;

  return (
    <div>
      {currentRecordCases.map((item, index) => (
        // <div className="recordDiv3" key={item["caseId"]}>
        <div className="recordDiv3" key={index}>
          <div className="d-flex align-items-center">
            <span className="span1 flex-grow-1">案件名稱</span>
            <span className="span1 flex-grow-1">報價金額</span>
            <span className="span1 flex-grow-1 borderR">截止日期</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="span2 flex-grow-1">{item["caseName"]}</span>
            <span className="span2 flex-grow-1">{item["quotation"]}</span>
            <span className="span2 flex-grow-1 borderR">
              {item["deadline"]}
            </span>
            {/* <span className="span2 flex-grow-1 borderR d-flex align-items-center">
              <p
                className="mb-0"
                style={{
                  backgroundColor: item["狀態"] == "報價落選" && "#b8b8b8",
                  color: item["狀態"] == "報價落選" && "red",
                }}
              >
                {item["狀態"] == "報價落選" ? "未成交" : item["狀態"]}
              </p>
            </span> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Quoted;
