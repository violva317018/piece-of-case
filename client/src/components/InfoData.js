import React, { useContext, useState } from "react";
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
  const { headphoto, setHeadPhoto } = useContext(GlobelDate);
  const data = new FormData();
  data.append("photo", headphoto);

  const handleHeadPhoto = () => {
    console.log(headphoto);
    Auth.uploadPhoto(data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="infoDataDiv d-flex">
      <div className="headPhotoDiv">
        <img
          id="infoImg"
          src="https://avatars.githubusercontent.com/u/98681?v=4"
        />
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
                  accept="image/png, image/jpeg"
                  className="inputFile"
                  onChange={(e) => {
                    setHeadPhoto(e.target.files);
                  }}
                />
                <button
                  type="button"
                  className="btn btn-primary"
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
          <span className="p1">王曉明</span>
          <button>修改</button>
        </div>
        <div className="infoDiv">
          <div className="infoDiv1">
            <label htmlFor="" className="p2">
              帳號：
            </label>
            <span>azbx230712@gmail.com</span>
          </div>
          <hr />
          <div className="infoDiv1">
            <label htmlFor="" className="p2">
              密碼：
            </label>
            <span>***************</span>
            <button className="float-right">修改</button>
          </div>
          <hr />
          <div className="infoDiv1">
            <label htmlFor="" className="p2">
              連絡電話：
            </label>
            <span>0933123456</span>
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
            <span>國立OO大學</span>、<span>OOXX軟體工程師</span>
            <button className="float-right">修改</button>
          </div>
          <hr />
          <div className="infoDiv2">
            <label htmlFor="" className="p2">
              作品集
            </label>
            <span>
              <Link className="p4">OOXX.pdf</Link>
              <Link className="p4">OXOX.zip</Link>
              <Link className="p4">XXOO.jpg</Link>
            </span>
            <button className="float-right">修改</button>
          </div>
          <hr />
          <div className="infoDiv2">
            <label htmlFor="" className="p2">
              擅長工具
            </label>
            <span>word</span>、<span>excel</span>、<span>powerpoint</span>
            <button className="float-right">修改</button>
          </div>
          <div className="pos">
            <div className="p3 borderTop">自傳</div>
            <div>
              <p className="p5">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我是一位充滿熱情且富有創造力的工程師。從小時候起，我對科學和技術的奧秘就產生了濃厚的興趣。我總是渴望理解事物的運作原理，並找到創新的解決方案。
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我對數學和物理學的熱愛促使我追求工程學的道路。在大學期間，我專注於計算機科學和軟體工程。這些領域給了我無限的想像力和創造力的空間。
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作為一個工程師，我熟悉多種編程語言和開發工具。我喜歡從頭開始構建軟體應用程式，並看到它們在實際應用中發揮作用。我對前端開發、後端開發和資料庫設計都有著扎實的理解和實踐經驗。
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我非常重視代碼的質量和可維護性，並且致力於編寫乾淨、模組化和可擴展的程式碼。我也了解測試的重要性，並且熟悉單元測試和自動化測試的實踐。
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在團隊合作方面，我喜歡與不同背景和專業知識的人合作。我相信協作和知識共享可以帶來最佳的解決方案。我樂於與團隊成員合作，共同解決技術挑戰，並取得卓越的成果。
                <br />
              </p>
            </div>
            <button className="float-right2">修改</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoData;
