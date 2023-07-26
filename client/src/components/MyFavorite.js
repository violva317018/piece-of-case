import React, { useEffect, useState } from "react";
import "./myfavorite.css";
import { Link } from "react-router-dom";

function MyFavorite() {
  const [star, setStar] = useState(false);

  const cases = [
    {
      imgSrc:
        "https://www.funtime.com.tw/blog/wp-content/uploads/2017/08/84.jpg",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
      caseStar: true,
    },
    {
      imgSrc: "https://img.lovepik.com/element/40162/0669.png_300.png",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
      caseStar: false,
    },
    {
      imgSrc:
        "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-cartoon-cute-love-bulb-image_1195420.jpg",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
      caseStar: false,
    },
    {
      imgSrc:
        "https://www.funtime.com.tw/blog/wp-content/uploads/2017/08/84.jpg",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
      caseStar: false,
    },
    {
      imgSrc: "https://img.lovepik.com/element/40162/0669.png_300.png",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
      caseStar: false,
    },
    {
      imgSrc:
        "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-cartoon-cute-love-bulb-image_1195420.jpg",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
      caseStar: false,
    },
    {
      imgSrc: "https://img.lovepik.com/element/40162/0669.png_300.png",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
      caseStar: false,
    },
    {
      imgSrc:
        "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-cartoon-cute-love-bulb-image_1195420.jpg",
      name: "案件標題",
      place: "地點",
      price: "預算",
      deadline: "預計完成日期",
      caseStar: false,
    },
  ];

  // 載入時就寫入 localStorage，確保起初渲染就有狀態
  useEffect(() => {
    // cases.map((item, index) => {
    //   localStorage.setItem(`myStar${index}`, JSON.stringify(item.caseStar));
    // });

  }, []);
  return (
    <div className="caseDiv">
      {/* 顯示案子 */}
      <section className="d-flex flex-wrap">
        {cases.map((item, index) => (
          <div className="case1 border border-2 border-warning p-2" key={index}>
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
            {/* 愛心 Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill caseStar"
              viewBox="0 0 16 16"
              onClick={() => {
                let starStatus = JSON.parse(
                  localStorage.getItem(`myStar${index}`)
                );
                // 變更 localStorage 內的資料
                localStorage.setItem(`myStar${index}`, !starStatus);
                // 為了確保每一次都能渲染
                setStar(!star);
              }}
              style={{
                // 我將 || 移除 因為用 useeffect 先載入確保有 【myStar${index}】
                color: JSON.parse(localStorage.getItem(`myStar${index}`))
                  ? "#ffc400"
                  : "#c0c0c0",
              }}
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
        ))}
      </section>
      {/* 顯示page */}
      <div className="d-flex casePag">
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
  );
}

export default MyFavorite;
