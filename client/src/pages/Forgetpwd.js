import React, { useContext, useEffect, useState } from "react";
import "./Forgetpwd.css";
import { Link, json, useNavigate } from "react-router-dom";
import { GlobelDate } from "../App";
import Auth from "../axios/Auth";

function Forgetpwd() {
  const[forgetPWD, setForgetPWD] = useState(1);
  const[changeEmail, setChangeEmail] = useState('');
  const handleEmail = () => {
    // setForgetPWD(2);
    // console.log(changeEmail)
    Auth.forgetPwd(changeEmail)
    .then((result)=>{
      console.log(result['data'])
    })
    .catch((err)=>{console.error(err)})
  }
  return (
    <div className=" forgetBody">
      <div className="forgetpwdDiv">
        {forgetPWD === 1 && (<div action="" className="formSize">
          <h2 className="mb-3 textAlignC">忘記密碼</h2>
          <div className="form-floating">
            <input
              type="email"
              placeholder="請輸入帳號"
              className="form-control"
              onChange={(e)=>(setChangeEmail(e.target.value))}
            />
            <label htmlFor="floatingInput">請輸入帳號</label>
          </div>
          <div className="form-floating">
            <button
              className="btn submitButton"
              type="submit"
              onClick={handleEmail}
            >
              &nbsp;&nbsp;下一步&nbsp;&nbsp;
            </button>
          </div>
        </div>)}
        {forgetPWD===2 && (<div>123</div>
        )}
      </div>
    </div>
  );
}

export default Forgetpwd;
