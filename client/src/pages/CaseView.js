// 接案者點進案子後的介面

import React, { useState } from "react";
import "../App.css";
import "./caseView.css";
import CaseContent from "../components/CaseContent";
import UserInfo from "../components/UserInfo";
import CaseRecommend from "../components/CaseRecommend";

function CaseView() {
  // 預算金額
  const [price, setPrice] = useState(1000);
  return (
    <main>
      <div className="container">
        <div className="d-flex caseView">
          {/* 案件內容區域 */}
          <CaseContent price={price} setPrice={setPrice} />
          {/* 案主資訊 && 報價區域 */}
          <UserInfo price={price} />
        </div>
        {/* 為您推薦 */}
        <CaseRecommend />
      </div>
    </main>
  );
}

export default CaseView;
