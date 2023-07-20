import React from "react";
import "./unclinch.css";

function UnClinch() {
  const unclinchCases = [
    {
      創建者id: "A45",
      caseId: "1",
      案件名稱: "阿里巴巴語言家教",
      報價金額: "15萬",
      報價日期: "2023/07/13",
      操作1: "刪除",
    },
    {
      創建者id: "A98",
      caseId: "2",
      案件名稱: "修水管",
      報價金額: "3000",
      報價日期: "2023/12/11",
      操作1: "刪除",
    },
  ];
  return (
    <div>
      {unclinchCases.map((item, index) => (
        <div className="recordDiv3" key={item["caseId"]}>
          <div className="d-flex align-items-center">
            <span className="span1 flex-grow-1">案件名稱</span>
            <span className="span1 flex-grow-1">報價金額</span>
            <span className="span1 flex-grow-1">報價日期</span>
            <span className="span1 flex-grow-1 borderR">操作</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="span2 flex-grow-1">{item["案件名稱"]}</span>
            <span className="span2 flex-grow-1">{item["報價金額"]}</span>
            <span className="span2 flex-grow-1">{item["報價日期"]}</span>
            <span className="span2 flex-grow-1 borderR">刪除</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UnClinch;
