import React from "react";
import "./AllCase.css";
import { Link } from "react-router-dom";

function AllCase() {
  // case ，利用API 從後端取得
  const cases = [
    {
      imgSrc:
        "https://www.funtime.com.tw/blog/wp-content/uploads/2017/08/84.jpg",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
    },
    {
      imgSrc: "https://img.lovepik.com/element/40162/0669.png_300.png",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
    },
    {
      imgSrc:
        "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-cartoon-cute-love-bulb-image_1195420.jpg",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
    },
    {
      imgSrc:
        "https://www.funtime.com.tw/blog/wp-content/uploads/2017/08/84.jpg",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
    },
    {
      imgSrc: "https://img.lovepik.com/element/40162/0669.png_300.png",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
    },
    {
      imgSrc:
        "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-cartoon-cute-love-bulb-image_1195420.jpg",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
    },
  ];
  return (
    <main className="container my-4">
      <div className="takeTheCaseBox d-flex">
        {/* 左側篩選欄 */}
        <div className="condition mx-3">
          {/* 平面設計 */}
          <div className="mb-3">
            <button
              className="btn btn-secondary w-100"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample1"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              平面設計
            </button>
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card card-body">
                <ul className="list-group">
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item1" name="group1" />
                    <label htmlFor="item1">名片</label>
                  </li>
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item2" name="group1" />
                    <label htmlFor="item2">封面</label>
                  </li>
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item3" name="group1" />
                    <label htmlFor="item3">企業形象/VI</label>
                  </li>
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item4" name="group1" />
                    <label htmlFor="item4">DM/名片/海報</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 網頁設計 */}
          <div className="mb-3">
            <button
              className="btn btn-secondary w-100"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            >
              網頁設計
            </button>
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="card card-body">
                <ul className="list-group">
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item5" name="group2" />
                    <label htmlFor="item5">網頁設計1</label>
                  </li>
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item6" name="group2" />
                    <label htmlFor="item6">網頁設計2</label>
                  </li>
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item7" name="group2" />
                    <label htmlFor="item7">網頁設計3</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 家教 */}
          <div className="mb-3">
            <button
              className="btn btn-secondary w-100"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample3"
              aria-expanded="false"
              aria-controls="multiCollapseExample3"
            >
              家教
            </button>
            <div className="collapse multi-collapse" id="multiCollapseExample3">
              <div className="card card-body">
                <ul className="list-group">
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item8" name="group3" />
                    <label htmlFor="item8">國語</label>
                  </li>
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item9" name="group3" />
                    <label htmlFor="item9">英語</label>
                  </li>
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item10" name="group3" />
                    <label htmlFor="item10">數學</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 僵屍 */}
          <div className="mb-3">
            <button
              className="btn btn-secondary w-100"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample5"
              aria-expanded="false"
              aria-controls="multiCollapseExample5"
            >
              尋找僵屍趣
            </button>
            <div className="collapse multi-collapse" id="multiCollapseExample5">
              <div className="card card-body">
                <ul className="list-group">
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item22" name="group5" />
                    <label htmlFor="item22">大僵屍</label>
                  </li>
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item23" name="group5" />
                    <label htmlFor="item23">中僵屍</label>
                  </li>
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item24" name="group5" />
                    <label htmlFor="item24">小僵屍</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 區域 */}
          <div className="mb-3">
            <button
              className="btn btn-secondary w-100"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample4"
              aria-expanded="false"
              aria-controls="multiCollapseExample4"
            >
              區域
            </button>
            <div className="collapse multi-collapse" id="multiCollapseExample4">
              <div className="card card-body">
                <ul className="list-group">
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item11" name="group4" />
                    <label htmlFor="item11">台中市</label>
                  </li>
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item12" name="group4" />
                    <label htmlFor="item12">台北市</label>
                  </li>
                  <li className="list-group-item p-0">
                    <input type="checkbox" id="item13" name="group4" />
                    <label htmlFor="item13">台南市</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 右側接案區 */}
        <div className="allCaseBox">
          {/* 顯示案子 */}
          <section className="d-flex flex-wrap">
            {cases.map((item, index) => (
              <div
                className="case border border-2 border-warning p-2"
                key={index}
              >
                <img
                  src={item.imgSrc}
                  alt="img"
                  width={150}
                  height={100}
                  className="mb-3"
                />
                <p>案件標題</p>
                <p>地點</p>
                <p>預算</p>
                <p>預計完成日期</p>
                <Link className="moreView" to={"/caseview"}>
                  more view
                </Link>
              </div>
            ))}
          </section>
          {/* 顯示page */}
          <ul className="pagination">
            <li className="page-item">
              <p className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </p>
            </li>
            <li className="page-item">
              <p className="page-link" href="#">
                1
              </p>
            </li>
            <li className="page-item">
              <p className="page-link" href="#">
                2
              </p>
            </li>
            <li className="page-item">
              <p className="page-link" href="#">
                3
              </p>
            </li>
            <li className="page-item">
              <p className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default AllCase;
