import React from "react";
import "./caseContent.css";

function CaseContent(props) {
  const { price, setPrice } = props;
  return (
    <div className="case-view">
      <h2>案件標題</h2>
      <h2>地點</h2>
      <h2>預計完成金額 {price} 元</h2>
      <h2>預計完成日期</h2>
      <h2>詳細說明</h2>
      <h2>詳細說明</h2>
      <h2>詳細說明</h2>
      <h2>詳細說明</h2>
      <h2>詳細說明</h2>
      <h2>詳細說明</h2>
      <h2>詳細說明</h2>
      <h2>詳細說明</h2>
      <h2>詳細說明</h2>
      <p>........................</p>
    </div>
  );
}

export default CaseContent;
