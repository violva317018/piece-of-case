import React, { useContext, useState } from "react";
import "./caseRecommend.css";
import { GlobelDate } from "../App";
import { Route, Routes, Link } from "react-router-dom";

function CaseRecommend() {
  //    從 【GlobelDate】取得變數
  const { aID, bID } = useContext(GlobelDate);
  // 目前使用者id === 建案子的使用者id
  const [userEqual, useUserEqual] = useState(aID === bID);
  // 推薦案子 ， 從後端API取得
  const recommendCases = [
    {
      title: "案件標題",
      place: "地點",
      deadline: "時間",
      price: "預算金額",
    },
    {
      title: "案件標題",
      place: "地點",
      deadline: "時間",
      price: "預算金額",
    },
    {
      title: "案件標題",
      place: "地點",
      deadline: "時間",
      price: "預算金額",
    },
    {
      title: "案件標題",
      place: "地點",
      deadline: "時間",
      price: "預算金額",
    },
  ];
  // 推薦案子 ， 從後端API取得
  const quote = [
    {
      name: "A猿人",
      price: "2000",
      selfRecommended: "今天天氣真好",
    },
    {
      name: "B人猿",
      price: "1000",
      selfRecommended: "",
    },
    {
      name: "C猩猩",
      price: "5500",
      selfRecommended: "老闆好",
    },
  ];
  return (
    <div className="recommend">
      <div className="recommend-tile">
        <h1>{userEqual ? "報價人員" : "為您推薦案子"}</h1>
      </div>
      <div className="recommend-content">
        {/* 三元表達式 假如【userEqual】為【True】就執行【:】前面，反之【userEqual】為【False】就執行【:】後面 */}
        {userEqual ? (
          // 以案主身分查看自己的提案
          <>
            {quote.map((item, index) => (
              <div className="recommend-content-box" key={index}>
                <div>
                  <p>{item.name}</p>
                  <p>報價金額 : {item.price}</p>
                  <p>自我推薦 : </p>
                  <p className="selfRecommended">{item.selfRecommended}</p>
                </div>
                {/* 三個btn Link */}
                <div>
                  <button className="recommend-content-box-btn">
                    <Link to="/chatRoom">聊聊</Link>
                  </button>
                  <button className="recommend-content-box-btn">
                    <Link to="/checkInfo">查看資訊</Link>
                  </button>
                  <button className="recommend-content-box-btn">
                    <Link to="/scheme">合作</Link>
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          // 以接案者身分查看案件
          <>
            {recommendCases.map((item, index) => (
              <div className="recommend-content-box" key={index}>
                <p>{item.title}</p>
                <p>{item.place}</p>
                <p>{item.deadline}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </>
        )}
        {/* 渲染 recommendCases 內的案件，要使用<Link> */}
      </div>
    </div>
  );
}

export default CaseRecommend;
