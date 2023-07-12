import React, { useContext } from "react";
import "./personalinfo.css";
import SideNav from "../components/SideNav";
import InfoData from "../components/InfoData";
import { GlobelDate } from "../App";
import MyFavorite from "../components/MyFavorite";
import ProposalRecord from "../components/ProposalRecord";
import TakeTheCaseRecord from "../components/TakeTheCaseRecord";

function PersonalInfo() {
  const { infoData } = useContext(GlobelDate);

  return (
    <div className="d-flex persInfoBody">
      <SideNav />
      {infoData === "1" && <InfoData />}
      {infoData === "2" && <MyFavorite />}
      {infoData === "3" && <ProposalRecord />}
      {infoData === "4" && <TakeTheCaseRecord />}
    </div>
  );
}

export default PersonalInfo;
