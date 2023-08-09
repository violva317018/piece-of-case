import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { GlobelDate } from "../App";
import UserInfo from "./UserInfo";
import Auth from "../axios/Auth";
import Logo from "../imgs/proposalFiles/logo.png";

function Header() {
  const {
    headphoto,
    setHeadPhoto,
    userinfo,
    setUserInfo,
    setInfoData,
    unreadNotifications,
  } = useContext(GlobelDate);
  const handleLogout = () => {
    Auth.logout(userinfo)
      .then((result) => {
        //登出後把storage的userinfo改成result
        localStorage.setItem(
          "userInfo",
          JSON.stringify(result["data"]["message"][0]["result"])
        );
        //把空字串傳入setUserInfo
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUserInfo(
        localStorage
          .getItem("userInfo")
          .substring(1, localStorage.getItem("userInfo").length - 1)
      );
      Auth.enterProfile(userinfo)
        .then((result) => {
          setHeadPhoto(
            `data:image/jpeg;base64, ${result["data"]["message"][0]["profilePhoto"]}`
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);
  // console.log(JSON.stringify(localStorage.getItem("userInfo")));
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
        {userinfo ? (
          <div className="dropdown ms-auto">
            <Link
              to="#"
              className="d-block link-dark text-decoration-none"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {headphoto ? (
                <img
                  src={headphoto}
                  alt="mdo"
                  width="40"
                  height="40"
                  className="rounded-circle"
                />
              ) : (
                <img
                  src={Logo}
                  alt="mdo"
                  width="40"
                  height="40"
                  className="rounded-circle"
                />
              )}
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
                  <span
                    className={
                      unreadNotifications?.length === 0
                        ? null
                        : "chatRoomNotification"
                    }
                  ></span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="" onClick={handleLogout}>
                  登出
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="d-flex ms-auto">
            {/* 第一個標籤不能運作的BUG，所要加一個DIV */}
            <div></div>
            <Link to="/login" className="mx-2">
              登入
            </Link>
            <Link to="/register" className="mx-2">
              註冊
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
