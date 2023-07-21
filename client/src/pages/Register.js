import React, { useState, useContext } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../axios/Auth";
import { GlobelDate } from "../App";

function Register() {
  const navigate = useNavigate();
  const {
    setUserName,
    setUserEmail,
    setUserPassword,
    setUserHashPassword,
    setUserInfo,
    setUserID,
    userName,
    userEmail,
    userPassword,
    userHashPassword,
  } = useContext(GlobelDate);
  const [password2, setPassword2] = useState("");

  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleRegister = () => {
    Auth.signup(userName, userEmail, userPassword)
      .then((result) => {
        console.log(result);
        if (result["data"]["message"] !== "Email has already registered") {
          window.alert(result["data"]["result"]["0"]["result"]);
          Auth.login(userEmail, userPassword)
            .then((result) => {
              console.log(result["data"][0]["result"]);
              //登入後localStorage存userInfo
              localStorage.setItem(
                "userInfo",
                JSON.stringify(result["data"][0]["token"])
              );
              //登入後userinfo這個state要有東西才能判斷header是否登入
              setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
              //登入後存userid
              setUserID(result["data"][0]["userID"]);
              localStorage.setItem(
                "userID",
                JSON.stringify(result["data"][0]["userID"])
              );
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          window.alert(result["data"]["message"]);
        }
        navigate("/");
      })
      .catch((err) => {
        window.alert("註冊失敗！");
      });
  };

  return (
    <div className=" myBody d-flex">
      <div className="imgDiv1"></div>
      <div className="registerDiv d-flex">
        <div className="formSize">
          <h2 className="mb-3 textAlignC">會員註冊</h2>
          <div className="form-floating">
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              type="text"
              placeholder="請輸入使用者名稱"
              className="form-control"
              required
            />
            <label htmlFor="floatingInput">請輸入使用者名稱</label>
          </div>
          <div className="form-floating">
            <input
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              type="email"
              placeholder="帳號為電子郵件"
              className="form-control inputRadiusNull"
              required
            />
            <label htmlFor="floatingInput">帳號為電子郵件</label>
          </div>
          <div className="form-floating">
            <input
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              type="password"
              placeholder="請輸入密碼"
              className="form-control inputRadiusNull"
              required
            />
            <label htmlFor="floatingInput">請輸入密碼</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              placeholder="重新輸入密碼"
              className="form-control inputRadiusBottom"
              onChange={handlePassword2}
              required
            />
            <label htmlFor="floatingInput">重新輸入密碼</label>
          </div>
          {userPassword !== password2 && (
            <span style={{ color: "red" }}>密碼輸入不一致！</span>
          )}
          <div className="form-floating">
            <button
              className="btn submitButton"
              type="submit"
              disabled={userPassword !== password2}
              onClick={handleRegister}
            >
              註冊會員
            </button>
          </div>
          <hr />
          <span className="d-block textAlignC">
            您有帳號了?
            <Link to="/login" className="linkCss">
              立即登入
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
