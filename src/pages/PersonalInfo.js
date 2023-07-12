import React, { useContext } from "react";
import "./personalinfo.css";
import SideNav from "../components/SideNav";
import InfoData from "../components/InfoData";
import { GlobelDate } from "../App";
import MyFavorite from "../components/MyFavorite";

function PersonalInfo() {
  const { infoData } = useContext(GlobelDate);

  return (
    <div className="d-flex persInfoBody">
      <SideNav />
      {infoData === "1" && <InfoData />}
      {infoData === "2" && <MyFavorite />}
    </div>
  );
}

export default PersonalInfo;
