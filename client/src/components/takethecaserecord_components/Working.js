import React, { useState } from "react";
import "./working.css";

function Working(props) {
  const { currentProposeCases } = props;

  const workingCase = [
    {
      創建者id: "A23",
      caseId: "1",
      案件名稱: "RWD網站設計",
      報價金額: "5萬",
      成交日期: "2023/07/04",
      成交對象: "張文彥",
      階段數量: 2,
      案件進度: 1,
      deadLine0: "2023/07/04",
      deadLine1: "2023/07/14",
      deadLine2: "2023/07/24",
      deadLine3: "2023/08/03",
      階段1結清: "未結清",
      階段2結清: "未結清",
      階段3結清: "未結清",
    },
    {
      創建者id: "A73",
      caseId: "2",
      案件名稱: "遛狗",
      報價金額: "100",
      成交日期: "2023/07/12",
      成交對象: "張文彥",
      階段數量: 5,
      案件進度: 0,
      deadLine0: "2023/07/12",
      deadLine1: "2023/07/14",
      deadLine2: "2023/07/24",
      deadLine3: "2023/08/03",
      deadLine4: "2023/08/13",
      deadLine5: "2023/08/23",
      階段1結清: "未結清",
      階段2結清: "未結清",
      階段3結清: "未結清",
      階段4結清: "未結清",
      階段5結清: "未結清",
    },
  ];

  const progBar = (item) => {
    return (item["案件進度"] / item["階段數量"]) * 100;
  };

  const completedBtn = (i, item) => {
    if (i == 0) {
      return (
        <div
          className="btn1"
          onClick={() => {
            item["案件進度"] += 1;
            console.log(item["案件進度"]);
          }}
        >
          達成
        </div>
      );
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
          {completedBtn(i, item)}
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

  const [show, setShow] = useState(true);

  const [arrowStyle, setArrowStyle] = useState();

  return (
    <div>
      {workingCase.map((item, index) => (
        <div className="recordDiv31" key={index}>
          <div className="d-flex align-items-center">
            <span className="span1 flex-grow-1">案件名稱</span>
            <span className="span1 flex-grow-1">報價金額</span>
            <span className="span1 flex-grow-1">成交日期</span>
            <span className="span1 del1">成交對象</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="span2 flex-grow-1">{item["案件名稱"]}</span>
            <span className="span2 flex-grow-1">{item["報價金額"]}</span>
            <span className="span2 flex-grow-1">{item["成交日期"]}</span>
            <span className="span2 del1">{item["成交對象"]}</span>
          </div>
          {JSON.parse(localStorage.getItem(`showProg${index}`)) && (
            <div className="progress1">
              {circle(item)}
              <div className="progress prog1">
                <div
                  className="progress-bar "
                  style={{ width: `${progBar(item)}%` }}
                ></div>
              </div>
            </div>
          )}

          <div className="arrowDiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-bar-up arrow2"
              viewBox="0 0 16 16"
              style={
                JSON.parse(localStorage.getItem(`arrow${index}`)) || {
                  transform: "scaleY(-1)",
                }
              }
              onClick={() => {
                // 變更 localStorage 內的資料
                localStorage.setItem(
                  `showProg${index}`,
                  !JSON.parse(localStorage.getItem(`showProg${index}`))
                );

                JSON.parse(localStorage.getItem(`showProg${index}`))
                  ? localStorage.setItem(
                      `arrow${index}`,
                      JSON.stringify({
                        position: "relative",
                        bottom: "2rem",
                      })
                    )
                  : localStorage.setItem(
                      `arrow${index}`,
                      JSON.stringify({
                        transform: "scaleY(-1)",
                        position: "relative",
                      })
                    );
                // 為了確保每一次都能渲染
                setShow(!show);
              }}
            >
              <path
                fillRule="evenodd"
                d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Working;
