import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";
import { GlobelDate } from "../App";

function SideNav() {
  const { setInfoData } = useContext(GlobelDate);

  return (
    <div className="sidenav">
      <p>我的帳戶</p>
      <hr />
      <Link to="" onClick={() => setInfoData("1")}>
        帳戶資料
      </Link>
      <Link to="" onClick={() => setInfoData("2")}>
        我的收藏
      </Link>
      <Link to="" onClick={() => setInfoData("3")}>
        提案紀錄
      </Link>
      <Link to="" onClick={() => setInfoData("4")}>
        接案紀錄
      </Link>
    </div>
  );
}

export default SideNav;
