import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Link to="/">Logo</Link>
          <div className="d-flex">
            <Link to="/login">登入</Link>
            <Link to="/register">註冊</Link>
            <Link to="/proposal">提案</Link>
            <Link to="/allCase">接案畫面</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
