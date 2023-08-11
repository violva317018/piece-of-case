import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";
import { GlobelDate } from "../App";

function SideNav() {
  const { setInfoData, setProposal, setTakethecase } = useContext(GlobelDate);

  return (
    <div>
      <button
        className="btn btn-primary "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        &gt;
      </button>
      <div className="sidenav collapse" id="collapseExample">
        <p>我的帳戶</p>
        <hr />
        <Link to="" onClick={() => setInfoData("1")}>
          帳戶資料
        </Link>
        <Link to="" onClick={() => setInfoData("2")}>
          我的收藏
        </Link>
        <Link
          to=""
          onClick={() => {
            setInfoData("3");
            setProposal("1");
          }}
        >
          提案紀錄
        </Link>
        <Link
          to=""
          onClick={() => {
            setInfoData("4");
            setTakethecase("1");
          }}
        >
          接案紀錄
        </Link>
      </div>
    </div>
  );
}

export default SideNav;
