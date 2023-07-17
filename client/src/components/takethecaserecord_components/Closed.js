import React from "react";
import "./closed.css";

function Closed() {
  const closedCases = [
    {
      創建者id: "A45",
      caseId: "1",
      案件名稱: "阿里巴巴語言家教",
      報價金額: "15萬",
      結案日期: "2023/07/13",
      成交狀態: "已成交",
    },
    {
      創建者id: "A98",
      caseId: "2",
      案件名稱: "修水管",
      報價金額: "3000",
      結案日期: "2023/08/04",
      成交狀態: "已成交",
    },
  ];
  return (
    <div>
      {closedCases.map((item, index) => (
        <div className="recordDiv3">
          <div className="d-flex align-items-center">
            <span className="span1 flex-grow-1">案件名稱</span>
            <span className="span1 flex-grow-1">報價金額</span>
            <span className="span1 flex-grow-1">結案日期</span>
            <span className="span1 del1">成交狀態</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="span2 flex-grow-1">{item["案件名稱"]}</span>
            <span className="span2 flex-grow-1">{item["報價金額"]}</span>
            <span className="span2 flex-grow-1">{item["結案日期"]}</span>
            <span
              className="span2 del1"
              style={{ color: item["成交狀態"] == "已成交" ? "green" : "red" }}
            >
              {item["成交狀態"]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Closed;
