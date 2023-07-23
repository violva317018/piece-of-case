// 接案者點進案子後的介面
import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import "./caseView.css";
import CaseContent from "../components/CaseContent";
import UserInfo from "../components/UserInfo";
import CaseRecommend from "../components/CaseRecommend";
import { GlobelDate } from "../App";
import Case from "../axios/Case";

function CaseView() {
  // 取得全域變數
  const { currentCaseId } = useContext(GlobelDate);

  // 案件資訊
  const [caseName, setCaseName] = useState("");
  const [budget, setBudget] = useState(0);
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [caseState, setCaseState] = useState("");
  const [contactName, setContactName] = useState("");
  const [imageA, setImageA] = useState("");
  const [imageB, setImageB] = useState("");
  const [imageC, setImageC] = useState("");
  const [bulidCaseUserID, setBulidCaseUserID] = useState(0);

  // 目前使用者id === 建案子的使用者id
  const userEqual =
    JSON.parse(localStorage.getItem("userID")) === bulidCaseUserID;

  // 取得當前使用者ID與被點擊的案件ID並渲染出案件
  useEffect(() => {
    // 先 caseID，userID
    Case.getCaseInfo(currentCaseId, JSON.parse(localStorage.getItem("userID")))
      .then((result) => {
        console.log(result["data"][0]);
        setCaseName(result["data"][0]["caseName"]);
        setBudget(result["data"][0]["budget"]);
        setDeadline(result["data"][0]["deadline"]);
        setDescription(result["data"][0]["description"]);
        setCity(result["data"][0]["city"]);
        setDistrict(result["data"][0]["district"]);
        setCaseState(result["data"][0]["result"]);
        setContactName(result["data"][0]["contactName"]);
        setImageA(result["data"][0]["imageA"]);
        setImageB(result["data"][0]["imageB"]);
        setImageC(result["data"][0]["imageC"]);
        setBulidCaseUserID(result["data"][0]["userID"]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main>
      <div className="container">
        <div className="d-flex caseView">
          {/* 案件內容區域 */}
          <CaseContent
            budget={budget}
            caseName={caseName}
            deadline={deadline}
            description={description}
            city={city}
            district={district}
            imageA={imageA}
            imageB={imageB}
            imageC={imageC}
          />
          {/* 案主資訊 && 報價區域 */}
          <UserInfo
            budget={budget}
            contactName={contactName}
            caseState={caseState}
            userEqual={userEqual}
          />
        </div>
        {/* 為您推薦 */}
        <CaseRecommend userEqual={userEqual} />
      </div>
    </main>
  );
}

export default CaseView;
