import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className=" myBody d-flex">
      <div className="imgDiv1"></div>
      <div className="registerDiv d-flex">
        <form action="" className="formSize">
          <h2 className="mb-3 textAlignC">會員註冊</h2>
          <div className="form-floating">
            <input
              type="text"
              placeholder="請輸入使用者名稱"
              className="form-control"
            />
            <label htmlFor="floatingInput">請輸入使用者名稱</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              placeholder="帳號為電子郵件"
              className="form-control inputRadiusNull"
            />
            <label htmlFor="floatingInput">帳號為電子郵件</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              placeholder="請輸入密碼"
              className="form-control inputRadiusNull"
            />
            <label htmlFor="floatingInput">請輸入密碼</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              placeholder="重新輸入密碼"
              className="form-control inputRadiusBottom"
            />
            <label htmlFor="floatingInput">重新輸入密碼</label>
          </div>
          <div className="form-floating">
            <button className="btn submitButton" type="submit">
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
        </form>
      </div>
    </div>
  );
}

export default Register;
