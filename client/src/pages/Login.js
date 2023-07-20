import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import { Link, json, useNavigate } from "react-router-dom";
import { GlobelDate } from "../App";
import Auth from "../axios/Auth";

function Login() {
  // 轉址所需
  const navigate = useNavigate();
  // 取得全域變數
  const {
    userinfo,
    setUserInfo,
    setUserEmail,
    setUserPassword,
    userEmail,
    userPassword,
  } = useContext(GlobelDate);
  const [rememberID, setRememberID] = useState(false);

  // 將輸入資料傳給後端匹配，並取得使用者資訊
  const handleLogin = () => {
    Auth.login(userEmail, userPassword)
      .then((result) => {
        //登入後localStorage存userInfo
        localStorage.setItem(
          "userInfo",
          JSON.stringify(result["data"][0]["token"])
        );
        //記住帳號，如果rememberID是true就存使用者輸入的userEmail，沒勾就存空字串
        JSON.parse(localStorage.getItem("rememberID"))
          ? localStorage.setItem("accountNumber", JSON.stringify(userEmail))
          : localStorage.setItem("accountNumber", JSON.stringify(""));
        //登入後userinfo這個state要有東西才能判斷header是否登入
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
        // 導向至首頁
        navigate("/");
        console.log(result["data"][0]["token"]);
        if (JSON.parse(localStorage.getItem("userInfo")) == null) {
          window.alert("登入失敗");
        } else if (result["data"][0]["result"] == "登入成功") {
          window.alert("登入成功");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    localStorage.setItem("rememberID", JSON.stringify(false));
  }, []);

  return (
    <div className=" myBody d-flex">
      <div className="loginDiv d-flex">
        <div action="" className="formSize">
          <h2 className="mb-3 textAlignC">會員登入</h2>
          <div className="form-floating">
            <input
              type="email"
              placeholder="帳號為電子郵件"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              defaultValue={JSON.parse(localStorage.getItem("accountNumber"))}
              className="form-control inputRadiusTop"
              required
            />
            <label htmlFor="floatingInput">帳號為電子郵件</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              placeholder="請輸入密碼"
              className="form-control inputRadiusBottom"
              required
            />
            <label htmlFor="floatingInput">請輸入密碼</label>
          </div>
          <div className="my-2 d-flex justify-content-between">
            <label htmlFor="rememberID">
              <input
                type="checkbox"
                id="rememberID"
                onChange={() =>
                  localStorage.setItem(
                    "rememberID",
                    !JSON.parse(localStorage.getItem("rememberID"))
                  )
                }
              />
              記住帳號
            </label>
            <div>
              <Link className="linkCssSm">忘記密碼</Link>
            </div>
          </div>
          <div className="form-floating">
            <button
              className="btn submitButton"
              type="submit"
              // onClick={() => {
              // localStorage.setItem("myLogin", JSON.stringify(true));
              // JSON.parse(localStorage.getItem("rememberID"))
              //   ? localStorage.setItem(
              //     "accountNumber",
              //     JSON.stringify(accountNumber)
              //   )
              //   : localStorage.setItem("accountNumber", JSON.stringify(""));
              // }}
              onClick={handleLogin}
            >
              &nbsp;&nbsp;登入&nbsp;&nbsp;
            </button>
          </div>
          <hr />
          <span className="d-block textAlignC">
            還沒有帳號嗎?
            <Link to="/register" className="linkCss">
              立即註冊
            </Link>
          </span>
        </div>
      </div>
      <div className="imgDiv"></div>
    </div>
  );
}

export default Login;
