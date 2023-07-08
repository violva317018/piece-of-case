import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h1>Logo</h1>
          <div className="d-flex">
            <h2>登入</h2>
            <h2>註冊</h2>
            <h2>註冊</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
