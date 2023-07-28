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
    files,
  } = props;

  const fileType = (file) => {
    if (file.charAt(0) === "/") {
      return "image/jpeg";
    } else if (file.charAt(0) === "i") {
      return "image/png";
    } else if (file.charAt(0) === "J") {
      return "application/pdf";
    } else if (file.charAt(0) === "U") {
      return "application/pdf";
    }
  }
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
      {files.map((item, index) => (
        <div key={index}>
          <img
            src={`data:image/${fileType(item)}, ${item}`}
            width={"100"}
            alt="img"
          />
        </div>
      ))}
    </div>
  );
}

export default CaseContent;
