import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import { Link, json } from "react-router-dom";
import { GlobelDate } from "../App";
import Auth from "../axios/Auth";

function Login() {
  const [accountNumber, setAccountNumber] = useState("");
  const [rememberID, setRememberID] = useState(false);

  const handleChange = (e) => {
    setAccountNumber(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("rememberID", JSON.stringify(false));
  }, []);

  return (
    <div className=" myBody d-flex">
      <div className="loginDiv d-flex">
        <form action="" className="formSize">
          <h2 className="mb-3 textAlignC">會員登入</h2>
          <div className="form-floating">
            <input
              type="email"
              placeholder="帳號為電子郵件"
              defaultValue={JSON.parse(localStorage.getItem("accountNumber"))}
              onChange={handleChange}
              className="form-control inputRadiusTop"
              required
            />
            <label htmlFor="floatingInput">帳號為電子郵件</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
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
              onClick={() => {
                localStorage.setItem("myLogin", JSON.stringify(true));
                JSON.parse(localStorage.getItem("rememberID"))
                  ? localStorage.setItem(
                      "accountNumber",
                      JSON.stringify(accountNumber)
                    )
                  : localStorage.setItem("accountNumber", JSON.stringify(""));
              }}
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
        </form>
      </div>
      <div className="imgDiv"></div>
    </div>
  );
}

export default Login;
