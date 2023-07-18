import React from "react";
import "./completed.css";

function Completed() {
  const completedCases = [
    {
      創建者id: "A01",
      caseId: "1",
      案件名稱: "RWD網站設計",
      成交金額: "5萬",
      完成日期: "2023/07/13",
      成交對象: "張文彥",
    },
    {
      創建者id: "A02",
      caseId: "2",
      案件名稱: "阿里巴巴語言家教",
      成交金額: "15萬",
      完成日期: "2003/08/03",
      成交對象: "王建名",
    },
    {
      創建者id: "A57",
      caseId: "3",
      案件名稱: "清潔馬桶",
      成交金額: "8千",
      完成日期: "1923/01/13",
      成交對象: "劉燕明",
    },
    {
      創建者id: "A41",
      caseId: "4",
      案件名稱: "遛狗",
      成交金額: "1萬",
      完成日期: "1993/05/28",
      成交對象: "趙俊斌",
    },
  ];

  return (
    <div>
      {completedCases.map((item, index) => (
        <div className="recordDiv3" key={item.caseId}>
          <div className="d-flex align-items-center">
            <span className="span1 flex-grow-1">案件名稱</span>
            <span className="span1 flex-grow-1">成交金額</span>
            <span className="span1 flex-grow-1">完成日期</span>
            <span className="span1 del1">成交對象</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="span2 flex-grow-1">{item["案件名稱"]}</span>
            <span className="span2 flex-grow-1">{item["成交金額"]}</span>
            <span className="span2 flex-grow-1">{item["完成日期"]}</span>
            <span className="span2 del1">{item["成交對象"]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Completed;
