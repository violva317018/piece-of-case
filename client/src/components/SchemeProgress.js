import React, { useState } from "react";

// Scheme 的 component
function SchemeProgress(props) {
  const { progressStatus } = props;
  // 每個階段的 時間與報酬 => 有沒有辦法動態生成
  const [stage1Date, setStage1Date] = useState("");
  const [stage1Price, setStage1Price] = useState(0);
  const [stage2Date, setStage2Date] = useState("");
  const [stage2Price, setStage2Price] = useState(0);
  const [stage3Date, setStage3Date] = useState("");
  const [stage3Price, setStage3Price] = useState(0);
  const [stage4Date, setStage4Date] = useState("");
  const [stage4Price, setStage4Price] = useState(0);
  const [stage5Date, setStage5Date] = useState("");
  const [stage5Price, setStage5Price] = useState(0);
  const [stage6Date, setStage6Date] = useState("");
  const [stage6Price, setStage6Price] = useState(0);

  const stage = [
    { stage: "階段一", dateFun: setStage1Date, priceFun: setStage1Price },
    { stage: "階段二", dateFun: setStage2Date, priceFun: setStage2Price },
    { stage: "階段三", dateFun: setStage3Date, priceFun: setStage3Price },
    { stage: "階段四", dateFun: setStage4Date, priceFun: setStage4Price },
    { stage: "階段五", dateFun: setStage5Date, priceFun: setStage5Price },
    { stage: "階段六", dateFun: setStage6Date, priceFun: setStage6Price },
  ];
  // 轉程arr利用map渲染
  const runProgressStatusDiv = () => {
    const statusArr = [];
    for (let i = 0; i < progressStatus; i++) {
      statusArr.push(stage[i]);
    }
    return statusArr;
  };

  return (
    <>
      {runProgressStatusDiv().map((item, index) => (
        <div className="progress-status-div" key={index}>
          <p>{item.stage}</p>
          <p>完成日期</p>
          <input
            type="date"
            onBlur={(event) => {
              item.dateFun(event.target.value);
            }}
          />
          <p>報酬</p>
          <input
            type="number"
            onBlur={(event) => {
              item.priceFun(event.target.value);
            }}
          />
        </div>
      ))}
    </>
  );
}

export default SchemeProgress;
