import React from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";

function SideNav() {
  return (
    <div className="sidenav">
      <p>我的帳戶</p>
      <hr />
      <Link to="">帳戶資料</Link>
      <Link to="">我的收藏</Link>
      <Link to="">提案紀錄</Link>
      <Link to="">接案紀錄</Link>
      <Link to="">接案資料</Link>
    </div>
  );
}

export default SideNav;
