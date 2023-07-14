import React from "react";
import "./working.css";
import { useEffect } from "react";

function Working() {
  useEffect(() => {}, []);

  const workingCase = [
    {
      創建者id: "A23",
      caseId: "1",
      案件名稱: "RWD網站設計",
      預算金額: "5萬",
      成交日期: "2023/07/04",
      成交對象: "張文彥",
      階段數量: 2,
      案件進度: 1,
      deadLine0: "2023/07/04",
      deadLine1: "2023/07/14",
      deadLine2: "2023/07/24",
      deadLine3: "2023/08/03",
      階段1結清: "已結清",
      階段2結清: "未結清",
      階段3結清: "未結清",
    },
    {
      創建者id: "A73",
      caseId: "2",
      案件名稱: "遛狗",
      預算金額: "100",
      成交日期: "2023/07/12",
      成交對象: "張文彥",
      階段數量: 5,
      案件進度: 2,
      deadLine0: "2023/07/12",
      deadLine1: "2023/07/14",
      deadLine2: "2023/07/24",
      deadLine3: "2023/08/03",
      deadLine4: "2023/08/13",
      deadLine5: "2023/08/23",
      階段1結清: "已結清",
      階段2結清: "已結清",
      階段3結清: "未結清",
      階段4結清: "未結清",
      階段5結清: "未結清",
    },
  ];

  const progBar = (item) => {
    return (item["案件進度"] / item["階段數量"]) * 100;
  };

  const completedBtn = (i) => {
    if (i == 0) {
      return <div className="btn1">達成</div>;
    }
  };

  const circle = (item) => {
    let circleResult = [];

    for (let i = 0; i < item["案件進度"] + 1; i++) {
      circleResult.push(
        <div className="progressCircle" key={i}>
          <div
            className="progCircle"
            style={{ backgroundColor: "#4798b3" }}
          ></div>
          <div className="deadLine">
            {i == 0 ? "成交日期" : "截止日期"}：{item[`deadLine${i}`]}
          </div>
          <div
            className="right1"
            style={{
              color: item[`階段${i}結清`] === "未結清" ? "red" : "green",
              width: "3rem",
            }}
          >
            {item[`階段${i}結清`]}
          </div>
        </div>
      );
    }

    for (let i = 0; i < item["階段數量"] - item["案件進度"]; i++) {
      circleResult.push(
        <div className="progressCircle" key={i + 10}>
          {completedBtn(i)}
          <div
            className="progCircle"
            style={{ backgroundColor: "#b8b8b8" }}
          ></div>

          <div className="deadLine">
            截止日期：{item[`deadLine${item["案件進度"] + i + 1}`]}
          </div>

          <div
            className="right1"
            style={{
              color:
                item[`階段${item["案件進度"] + i + 1}結清`] === "未結清"
                  ? "red"
                  : "green",
              width: "3rem",
            }}
          >
            {item[`階段${item["案件進度"] + i + 1}結清`]}
          </div>
        </div>
      );
    }

    return circleResult;
  };

  return (
    <div>
      {workingCase.map((item, index) => (
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
          <div className="progress1">
            {circle(item)}
            <div className="progress prog1">
              <div
                className="progress-bar "
                style={{ width: `${progBar(item)}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Working;
