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

  // 儲存母、子類別
  const categorys = [
    {
      'title': '家教課程',
      'subCategory': [
        '才藝',
        '升學',
        '語言',
      ]
    },
    {
      'title': '生活服務',
      'subCategory': [
        '清潔外包',
        '家庭代工',
        '水電維修',
      ]
    }
  ]


  return (
    <main className="container my-4">
      <div className="takeTheCaseBox d-flex">
        {/* 左側篩選欄 */}
        <div className="condition mx-3">
          {categorys.map((items, index) => (
            <div className="mb-3" key={index}>
              <button
                className="btn btn-secondary w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${items.title}`}
                aria-expanded="false"
                aria-controls={`${items.title}`}
              >
                {items.title}
              </button>
              <div className="collapse multi-collapse" id={`${items.title}`}>
                <div className="card card-body">
                  <ul className="list-group">
                    {items.subCategory.map((item, index) => (
                      <li className="list-group-item p-0" key={index}>
                        <input type="checkbox" id={`${items.title}${index}`} name={`${items.title}`} />
                        <label htmlFor={`${items.title}${index}`} >{item}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

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
