import React from "react";
import { Link } from "react-router-dom";
import "./publishing.css";

function Publishing() {
  // 刊登中案子的陣列
  const publishCases = [
    {
      創建者id: "A01",
      caseId: "1",
      案件名稱: "RWD網站設計",
      預算金額: "5萬",
      "新報價/報價數": "2／5",
    },
    {
      創建者id: "A02",
      caseId: "2",
      案件名稱: "阿巴巴語言家教",
      預算金額: "15萬",
      "新報價/報價數": "4／5",
    },
    {
      創建者id: "A03",
      caseId: "3",
      案件名稱: "清潔馬桶",
      預算金額: "5千",
      "新報價/報價數": "1／5",
    },
    {
      創建者id: "A41",
      caseId: "4",
      案件名稱: "遛狗",
      預算金額: "1萬",
      "新報價/報價數": "5／5",
    },
  ];

  // handle function
  // 我要得到該案件的ID 與 創建者ID

  return (
    <div>
      {/* 利用陣列渲染 */}
      {publishCases.map((item, index) => (
        <div
          className="recordDiv3"
          key={item.caseId}
          onClick={() => {
            console.log(item["caseId"]);
          }}
        >
          <div className="d-flex align-items-center" key={item.caseId}>
            <span className="span1 flex-grow-1">案件名稱</span>
            <span className="span1 flex-grow-1">預算金額</span>
            <span className="span1 flex-grow-1">新報價/報價數</span>
            <span className="span1 del1">操作</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="span2 flex-grow-1">{item["案件名稱"]}</span>
            <span className="span2 flex-grow-1">{item["預算金額"]}</span>
            <span className="span2 flex-grow-1">{item["新報價/報價數"]}</span>
            <span className="span2 del1">
              <div className="del2">下架</div>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Publishing;
