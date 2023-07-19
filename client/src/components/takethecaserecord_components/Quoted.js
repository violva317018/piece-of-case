import React from "react";
import "./quoted.css";

function Quoted() {
  const quotedCases = [
    {
      創建者id: "A45",
      caseId: "1",
      案件名稱: "阿里巴巴語言家教",
      報價金額: "15萬",
      截止日期: "2023/07/13",
    },
    {
      創建者id: "A98",
      caseId: "2",
      案件名稱: "修水管",
      報價金額: "3000",
      截止日期: "2023/12/11",
    },
  ];

  return (
    <div>
      {quotedCases.map((item, index) => (
        <div className="recordDiv3" key={item["caseId"]}>
          <div className="d-flex align-items-center">
            <span className="span1 flex-grow-1">案件名稱</span>
            <span className="span1 flex-grow-1">報價金額</span>
            <span className="span1 flex-grow-1 borderR">截止日期</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="span2 flex-grow-1">{item["案件名稱"]}</span>
            <span className="span2 flex-grow-1">{item["報價金額"]}</span>
            <span className="span2 flex-grow-1 borderR">
              {item["截止日期"]}
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
