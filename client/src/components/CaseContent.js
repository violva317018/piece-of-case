import React from "react";
import "./caseContent.css";

function CaseContent(props) {
  const {
    caseName,
    budget,
    deadline,
    description,
    city,
    district,
    imageA,
    imageB,
    imageC,
  } = props;
  return (
    <div className="case-view">
      <h2>案件標題 : {caseName}</h2>
      <h2>
        地點 : {city}
        {district}
      </h2>
      <h2>預計完成金額 : {budget} 元</h2>
      <h2>預計完成日期 : {deadline}</h2>
      <h2>詳細說明 : </h2>
      <h4>{description}</h4>
    </div>
  );
}

export default CaseContent;
