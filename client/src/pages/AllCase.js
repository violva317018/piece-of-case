import React, { useEffect, useState, useContext } from "react";
import "./AllCase.css";
import { Link } from "react-router-dom";
import Case from "../axios/Case";
import { GlobelDate } from "../App";

function AllCase() {
  const [page, setPage] = useState(1);
  const [bigClassID, setBigClassID] = useState(""); // 目前點選的資料
  const [bigClassStr, setBigClassStr] = useState("null"); // 儲存所有被點選的資料

  const [classID, setClassID] = useState("");
  const [cityID, setCityID] = useState("");
  const [districtID, setDistrictID] = useState(null);
  // const [categorys, setCategorys] = useState(null) // 利用useEffect 獲得資料
  const [cases, setCases] = useState([]); // 利用useEffect 獲得資料
  const [searchClass, setSearchClass] = useState([]); // 傳入需長這樣 => 'A01,B02'

  // 進到【home】就取得並放入localstorage 給【AllCase】 使用
  const [bigClassNames, setBigClassNames] = useState(
    JSON.parse(localStorage.getItem("bigClassNames"))
  ); // 母類別
  const [subBigClassNames, setSubBigClassNames] = useState(
    JSON.parse(localStorage.getItem("subBigClassNames"))
  ); // 子類別
  // 儲存母、子類別
  const categorys = [
    {
      title: "家教課程",
      id: "A",
      subCategory: ["A01", "A02", "A03"],
    },
    {
      title: "生活服務",
      id: "B",
      subCategory: ["B01", "B02", "B03"],
    },
  ];
  const locations = [
    {
      title: "地區",
      id: "C",
      subCategory: ["台北市", "新北市", "台中市", "台南市", "高雄市"],
    },
  ];

  // 畫面一掛載從資料庫取得所有案件
  useEffect(() => {
    Case.getCases(bigClassStr, classID, cityID, districtID, page)
      .then((result) => {
        setCases(result["data"]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [bigClassID, classID, cityID, districtID, page]);
  // 處理母類別的字串
  const handleBigClass = (id) => {
    setBigClassID(id);
    if (bigClassStr.indexOf(id) === -1) {
      // 進到頁面是否為第一次做篩選，為了避免,號
      if (bigClassStr === "null" || bigClassStr === "") {
        setBigClassStr(bigClassStr.replace("null", `${id}`)); // 將初始的null替換掉
        // setBigClassStr(id);
      } else {
        setBigClassStr((preState) => preState + "," + id);
      }
    }
    // 假如重複點選判斷狀態
    if (bigClassStr.match(id)) {
      if (bigClassStr.indexOf(`${id},`) !== -1) {
        setBigClassStr(bigClassStr.replace(`${id},`, "")); // 處理【A01,】這種狀態
      } else if (bigClassStr.indexOf(`,${id}`) !== -1) {
        setBigClassStr(bigClassStr.replace(`,${id}`, "")); // 處理【,A01】這種狀態
      } else {
        setBigClassStr("null"); // 處理【A01】這種狀態=> 這會報錯
      }
    }
  };
  return (
    <main className="container my-4">
      <div className="takeTheCaseBox d-flex">
        {/* 左側篩選欄 */}
        <div className="condition mx-3">
          {/* 類別 */}
          {bigClassNames.map((items, index) => (
            <div className="mb-3" key={index}>
              <button
                className="btn btn-secondary w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${items.bigClassID}`}
                data-bs-id={`${items.bigClassID}`} // 賦予代號
                aria-expanded="false"
                aria-controls={`${items.bigClassID}`}
                onClick={(e) => {
                  handleBigClass(e.target.dataset["bsId"]);
                  console.log(e.target.dataset["bsId"]);
                }}
              >
                {items.bigClassName}
              </button>
              <div
                className="collapse multi-collapse"
                id={`${items.bigClassID}`}
              >
                <div className="card card-body">
                  <ul className="list-group">
                    {subBigClassNames.map((item, index) => (
                      <li className="list-group-item p-0" key={index}>
                        <input
                          type="checkbox"
                          id={`${item.classID}`}
                          name={`${item.bigClassID}`}
                          onClick={(e) => {
                            console.log(e.target.id); // 取得代號
                            console.log(e.target.checked); // 取得是否打勾
                            setClassID(
                              (preState) => preState + "," + e.target.id
                            );
                          }}
                        />
                        <label htmlFor={`${item.classID}`}>
                          {item.className}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          {/* 地區 */}
          {locations.map((items, index) => (
            <div className="mb-3" key={index}>
              <button
                className="btn btn-secondary w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${items.title}`}
                data-bs-id={`${items.id}`} // 賦予代號
                aria-expanded="false"
                aria-controls={`${items.title}`}
                onClick={(e) => {
                  console.log(e.target.dataset["bsId"]); // 取得代號
                }}
              >
                {items.title}
              </button>
              <div className="collapse multi-collapse" id={`${items.title}`}>
                <div className="card card-body">
                  <ul className="list-group">
                    {items.subCategory.map((item, index) => (
                      <li className="list-group-item p-0" key={index}>
                        <input
                          type="checkbox"
                          id={`${items.title}${index}`}
                          name={`${items.title}`}
                          onClick={(e) => {
                            console.log(e.target.id); // 取得代號
                            console.log(e.target.checked); // 取得是否打勾
                          }}
                        />
                        <label htmlFor={`${items.title}${index}`}>{item}</label>
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
                  src={item.imageA}
                  alt="img"
                  width={150}
                  height={100}
                  className="mb-3"
                />
                <p>案件標題 : {item.caseName}</p>
                <p>
                  地點: {item.city}
                  {item.district}
                </p>
                <p>預算: {item.budget}</p>
                <p>預計完成日期: {item.deadline}</p>
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
