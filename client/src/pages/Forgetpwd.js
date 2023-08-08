import React, { useContext, useEffect, useState } from "react";
import "./Forgetpwd.css";
import { Link, Navigate, json, useNavigate } from "react-router-dom";
import { GlobelDate } from "../App";
import Auth from "../axios/Auth";

function Forgetpwd() {
  const navigate = useNavigate();
  let emailCheck = '';
  let verCodeCheck = '';
  let newPassword = '';
  const[forgetPWD, setForgetPWD] = useState(1);
  const[changeEmail, setChangeEmail] = useState('');
  const[verCode, setVerCode] = useState('');
  const[password, setpassword] = useState('');
  const[password2, setpassword2] = useState('');
  const handleEmail = () => {
    Auth.forgetPwd(changeEmail)
    .then((result)=>{
      emailCheck = result['data']
      if(emailCheck === 1){
        setForgetPWD(2);
      }else{
        alert('查無此帳號');
      }
    })
    .catch((err)=>{console.error(err)})
  }
  const handleVerCode = () =>{
    Auth.verCodeCheck(verCode)
    .then((result)=>{
      verCodeCheck = result['data']
      if(verCodeCheck === 1){
        setForgetPWD(3);
      }else{
        alert('驗證碼錯誤');
      }
    })
    .catch((err)=>{console.error(err)})
  }
  const handleNewPassword =()=>{
    Auth.newPassword(password, verCode)
    .then((result)=>{
      newPassword = result['data']
      alert(newPassword)
      navigate("/login")
    })
    .catch((err)=>{console.error(err)})
  }

  return (
    <div className=" forgetBody">
      <div className="forgetpwdDiv">
        {forgetPWD === 1 && (<div action="" className="formSize">
          <h2 className="mb-3 textAlignC">忘記密碼</h2>
          <p></p>
          <div className="form-floating">
            <input
              type="email"
              placeholder="請輸入帳號"
              className="form-control"
              onChange={(e)=>(setChangeEmail(e.target.value))}
            />
            <label htmlFor="floatingInput">請輸入帳號</label>
          </div>
          <p></p>
          <div className="form-floating">
            <button
              className="btn submitButton"
              type="submit"
              onClick={handleEmail}
            >
              &nbsp;&nbsp;下一步&nbsp;&nbsp;
            </button>
          </div>
        </div>
        )}

        {forgetPWD===2 && (<div action="" className="formSize">
          <h2 className="mb-3 textAlignC">忘記密碼</h2>
          <p>已發送驗證信至您的信箱</p>
          <p></p>
          <div className="form-floating">
            <input
              type="number"
              placeholder="請輸入驗證碼"
              className="form-control"
              onChange={(e)=>(setVerCode(e.target.value))}
            />
            <label htmlFor="floatingInput">請輸入6位數驗證碼</label>
          </div>
          <p></p>
          <div className="form-floating">
            <button
              className="btn submitButton"
              type="submit"
              onClick={handleVerCode}
            >
              &nbsp;&nbsp;下一步&nbsp;&nbsp;
            </button>
          </div>
        </div>
        )}

        {forgetPWD===3 && (<div action="" className="formSize">
          <h2 className="mb-3 textAlignC">忘記密碼</h2>
          <p>請輸入新密碼</p>
          <p></p>
          <div className="form-floating">
            <input
              type="password"
              placeholder="請輸入密碼"
              className="form-control"
              onChange={(e)=>(setpassword(e.target.value))}
            />
            <label htmlFor="floatingInput">請輸入密碼</label>
          </div>
          <p></p>
          <div className="form-floating">
            <input
              type="password"
              placeholder="重新輸入密碼"
              className="form-control"
              onChange={(e)=>(setpassword2(e.target.value))}
            />
            <label htmlFor="floatingInput">重新輸入密碼</label>
          </div>
          {password !== password2 && (
            <span style={{ color: "red" }}>密碼輸入不一致！</span>
          )}
          <p></p>
          <div className="form-floating">
            <button
              className="btn submitButton"
              type="submit"
              disabled={password !== password2}
              onClick={handleNewPassword}
            >
              &nbsp;&nbsp;下一步&nbsp;&nbsp;
            </button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Forgetpwd;
