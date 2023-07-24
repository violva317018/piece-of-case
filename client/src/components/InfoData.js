import React, { useContext, useEffect, useState } from "react";
import "./infodata.css";
import { Link } from "react-router-dom";
import { GlobelDate } from "../App";
import axios from "axios";
import Auth from "../axios/Auth";

function InfoData() {
  // const [modal, setModal] = useState(false);
  // const handleRevise = () => {
  //   setModal(true);
  // };
  const [headphoto, setHeadPhoto] = useState("");
  const [name, setName] = useState("");
  const [usernumber, setUserNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [tools, setTools] = useState("");
  const [autobiography, setAutobiography] = useState("");
  //修改姓名用
  const [changename, setChangeName] = useState(false);
  //修改密碼用
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [newpassword2, setNewPassword2] = useState("");
  const { userID, userinfo, changeheadphoto, setChangeHeadPhoto } =
    useContext(GlobelDate);
  const data = new FormData();
  data.append("photo", changeheadphoto);
  data.append("userID", JSON.parse(localStorage.getItem("userID")));

  const photoData = new FormData();
  const reader = new FileReader();
  useEffect(() => {
    Auth.enterProfile(userinfo)
      .then((result) => {
        setName(result["data"]["message"][0]["userName"]);
        setUserNumber(result["data"]["message"][0]["email"]);
        setPhone(result["data"]["message"][0]["phone"]);
        setExperience(result["data"]["message"][0]["education"]);
        setPortfolio(result["data"]["message"][0]["portfolio"]);
        setTools(result["data"]["message"][0]["softwore"]);
        setAutobiography(result["data"]["message"][0]["selfIntroduction"]);
        setHeadPhoto(
          `data:image/jpeg;base64, ${result["data"]["message"][0]["profilePhoto"]}`
        );
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //修改密碼
  const handleOldPassword = (e) => {
    Auth.checkOldPassword(
      JSON.parse(localStorage.getItem("userID")),
      oldpassword
    )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //修改頭貼
  const handleHeadPhoto = () => {
    // console.log(userID);
    // console.log(data.get("photo"));
    Auth.uploadPhoto(data.get("photo"), data.get("userID"))
      .then((result) => {
        setHeadPhoto(
          `data:image/jpeg;base64, ${result["data"]["profilePhoto"]}`
        );
        // console.log(result);
        // photoData.append("updatePhoto", result["data"]);
        // console.log(photoData.get("updatePhoto"));
      })
      .catch((err) => {
        console.error(err);
      });

    // reader.readAsDataURL(photoData.get("updatePhoto"));
  };

  //修改姓名
  const handleChangeName = () => {
    Auth.updateUser(JSON.parse(localStorage.getItem("userID")), changename)
      .then((result) => {
        window.alert(result["data"]["result"]);
        Auth.enterProfile(userinfo).then((result) => {
          setName(result["data"]["message"][0]["userName"]);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="infoDataDiv d-flex">
      <div className="headPhotoDiv">
        <img id="infoImg" src={headphoto} />
        <svg
          type="button"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pencil-square color1"
          viewBox="0 0 16 16"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <span className="spanCenter">修改頭像</span>
                <button
                  type="button"
                  className="btn-close mx-0"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <label htmlFor="avatar">請選擇一張頭像：</label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg, image/jpg"
                  className="inputFile"
                  onChange={(e) => {
                    setChangeHeadPhoto(e.target.files[0]);
                  }}
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleHeadPhoto}
                >
                  上傳
                </button>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="infoDataDiv2">
        <div>
          <span className="p1">{name}</span>
          <button data-bs-toggle="modal" data-bs-target="#changeName">
            修改
          </button>
          <div
            className="modal fade"
            id="changeName"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <span className="spanCenter">修改姓名</span>
                  <button
                    type="button"
                    className="btn-close mx-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <label htmlFor="avatar">請輸入姓名：</label>
                  <input
                    type="text"
                    id="avatar"
                    name="avatar"
                    className="inputText"
                    onChange={(e) => {
                      setChangeName(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                    onClick={handleChangeName}
                  >
                    修改
                  </button>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="infoDiv">
          <div className="infoDiv1">
            <label htmlFor="" className="p2">
              帳號：
            </label>
            <span>{usernumber}</span>
          </div>
          <hr />
          <div className="infoDiv1">
            <label htmlFor="" className="p2">
              密碼：
            </label>
            <span>***************</span>
            <button
              className="float-right"
              data-bs-toggle="modal"
              data-bs-target="#changePassword"
            >
              修改
            </button>
            <div
              className="modal fade"
              id="changePassword"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <span className="spanCenter">修改密碼</span>
                    <button
                      type="button"
                      className="btn-close mx-0"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="my-3">
                      <label htmlFor="avatar1">請輸入舊密碼：</label>
                      <input
                        type="password"
                        id="avatar1"
                        name="avatar"
                        className="inputText"
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="avatar2">請輸入新密碼：</label>
                      <input
                        type="password"
                        id="avatar2"
                        name="avatar"
                        className="inputText"
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="avatar3">請再輸入密碼：</label>
                      <input
                        type="password"
                        id="avatar3"
                        name="avatar"
                        className="inputText"
                        onChange={(e) => {
                          setNewPassword2(e.target.value);
                        }}
                      />
                    </div>
                    {newpassword != newpassword2 && (
                      <span style={{ color: "red" }}>密碼輸入不一致！</span>
                    )}

                    <button
                      type="button"
                      className="btn btn-primary mx-auto d-block"
                      data-bs-dismiss="modal"
                      onClick={handleOldPassword}
                    >
                      修改
                    </button>
                  </div>
                  <div className="modal-footer"></div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="infoDiv1">
            <label htmlFor="" className="p2">
              連絡電話：
            </label>
            <span>{phone}</span>
            <button className="float-right">修改</button>
          </div>
        </div>
      </div>
      <div className="CVDiv">
        <hr className="my-5" />
        <div className="CV1">
          <div>
            <div className="p3">我的履歷</div>
          </div>
          <div className="infoDiv2">
            <label htmlFor="" className="p2">
              學、經歷
            </label>
            <span>{experience}</span>
            <button className="float-right">修改</button>
          </div>
          <hr />
          <div className="infoDiv2">
            <label htmlFor="" className="p2">
              作品集
            </label>
            <span>{portfolio}</span>
            <button className="float-right">修改</button>
          </div>
          <hr />
          <div className="infoDiv2">
            <label htmlFor="" className="p2">
              擅長工具
            </label>
            <span>{tools}</span>
            <button className="float-right">修改</button>
          </div>
          <div className="pos">
            <div className="p3 borderTop">自傳</div>
            <div>
              <p className="p5">{autobiography}</p>
            </div>
            <button className="float-right2">修改</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoData;
