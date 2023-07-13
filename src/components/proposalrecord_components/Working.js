import React from "react";
import "./working.css";

function Working() {
  const workingCase = [
    {
      創建者id: "A23",
      caseId: "1",
      案件名稱: "RWD網站設計",
      預算金額: "5萬",
      成交日期: "2023/07/12",
      成交對象: "張文彥",
    },
    {
      創建者id: "A73",
      caseId: "2",
      案件名稱: "遛狗",
      預算金額: "100",
      成交日期: "2023/07/12",
      成交對象: "張文彥",
    },
  ];

  return (
    <div>
      {workingCase.map((item, index) => (
        <>
          <div className="recordDiv3" key={index}>
            <div className="d-flex align-items-center">
              <span className="span1 flex-grow-1">案件名稱</span>
              <span className="span1 flex-grow-1">預算金額</span>
              <span className="span1 flex-grow-1">成交日期</span>
              <span className="span1 del1">成交對象</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="span2 flex-grow-1">{item["案件名稱"]}</span>
              <span className="span2 flex-grow-1">{item["預算金額"]}</span>
              <span className="span2 flex-grow-1">{item["成交日期"]}</span>
              <span className="span2 del1">{item["成交對象"]}</span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Working;
