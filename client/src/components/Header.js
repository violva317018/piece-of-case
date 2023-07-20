import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { GlobelDate } from "../App";

function Header() {
  const { login, setLogin, setInfoData } = useContext(GlobelDate);

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem('userInfo')))
    console.log(login);
  }, []);
  return (
    <div className="header">
      <div className="h50 d-flex my-auto align-items-center">
        <Link to="/" className="mx-5">
          Piece Of Case
        </Link>
        <Link to="/proposal" className="mx-5 proposal-div">
          提案
        </Link>
        <Link to="/allCase" className="mx-5 allCase-div">
          接案
        </Link>
        {login || (
          <div className="d-flex ms-auto">
            <Link to="/login" className="mx-2">
              登入
            </Link>
            <Link to="/register" className="mx-2">
              註冊
            </Link>
          </div>
        )}
        {/* {login && ( */}
        <div className="dropdown ms-auto">
          <Link
            to="#"
            className="d-block link-dark text-decoration-none"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="40"
              height="40"
              className="rounded-circle"
            />
          </Link>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <Link
                className="dropdown-item"
                to="/personalinfo"
                onClick={() => setInfoData("1")}
              >
                我的帳號
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/personalinfo"
                onClick={() => setInfoData("3")}
              >
                我的案件
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/chatRoom">
                聊天室
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="#"
                onClick={() => {
                  localStorage.setItem("myLogin", JSON.stringify(false));
                  setLogin(JSON.parse(localStorage.getItem("myLogin")));
                }}
              >
                登出
              </Link>
            </li>
          </ul>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default Header;
