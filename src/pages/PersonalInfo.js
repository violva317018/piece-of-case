import React from "react";
import "./personalinfo.css";
import SideNav from "../components/SideNav";
import InfoData from "../components/InfoData";
import { Link } from "react-router-dom";

function PersonalInfo() {
  return (
    <div className="d-flex">
      <SideNav />
      <InfoData />
    </div>
  );
}

export default PersonalInfo;
