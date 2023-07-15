// 接案者點進案子後的介面

import React from "react";
import "../App.css";
import "./caseView.css";
import CaseContent from "../components/CaseContent";
import UserInfo from "../components/UserInfo";
import CaseRecommend from "../components/CaseRecommend";

function CaseView() {
  return (
    <main>
      <div className="container">
        <div className="d-flex caseView">
          {/* 案件內容區域 */}
          <CaseContent />
          {/* 案主資訊 && 報價區域 */}
          <UserInfo />
        </div>
        {/* 為您推薦 */}
        <CaseRecommend />
      </div>
    </main>
  );
}

export default CaseView;
