import React, { useContext, useState } from "react";
import "./personalinfo.css";
import SideNav from "../components/SideNav";
import InfoData from "../components/InfoData";
import { GlobelDate } from "../App";
import MyFavorite from "../components/MyFavorite";
import ProposalRecord from "../components/ProposalRecord";
import TakeTheCaseRecord from "../components/TakeTheCaseRecord";

function PersonalInfo() {
  const { infoData } = useContext(GlobelDate);
  const [currentProposeState, setCurrentProposeState] = useState("草稿"); // 儲存被點擊的狀態
  const [currentProposePages, setCurrentProposePages] = useState(1); // 儲存頁數
  const [currentProposeCases, setCurrentProposeCases] = useState([]); // 儲存當前取得的案件

  // 處理刪除 => 提案紀錄的草稿、接案紀錄的未成交
  const handleDelete = (caseID) => {
    alert(caseID);
    // Auth.deleteCase(caseID)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="d-flex persInfoBody">
      <SideNav />
      {infoData === "1" && <InfoData />}
      {infoData === "2" && <MyFavorite />}
      {infoData === "3" && (
        <ProposalRecord
          currentProposeState={currentProposeState}
          setCurrentProposeState={setCurrentProposeState}
          currentProposePages={currentProposePages}
          setCurrentProposePages={setCurrentProposePages}
          currentProposeCases={currentProposeCases}
          setCurrentProposeCases={setCurrentProposeCases}
          handleDelete={handleDelete}
        />
      )}
      {infoData === "4" && (
        <TakeTheCaseRecord
          currentProposeState={currentProposeState}
          setCurrentProposeState={setCurrentProposeState}
          currentProposePages={currentProposePages}
          setCurrentProposePages={setCurrentProposePages}
          currentProposeCases={currentProposeCases}
          setCurrentProposeCases={setCurrentProposeCases}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default PersonalInfo;
