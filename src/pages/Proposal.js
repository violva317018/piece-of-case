import React, { useState } from "react";
import "./proposal.css";

function Proposal() {
  // 儲存選擇的母類別
  const [category, setCategory] = useState("");

  // 定義子類別
  const subCategories = {
    1: [
      { value: "11", label: "翻譯寫作1" },
      { value: "12", label: "翻譯寫作2" },
      { value: "13", label: "翻譯寫作3" },
    ],
    2: [
      { value: "21", label: "商攝娛樂1" },
      { value: "22", label: "商攝娛樂2" },
      { value: "23", label: "商攝娛樂3" },
    ],
    3: [
      { value: "31", label: "網頁設計1" },
      { value: "32", label: "網頁設計2" },
      { value: "33", label: "網頁設計3" },
    ],
  };

  //  取得當前母類別資料
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main className="container">
      <div className="caseBox">
        {/* 案件名稱 */}
        <div className="box">
          <h4 className="">案件名稱 :</h4>
          <input type="text" placeholder="請填寫案件名稱" />
        </div>

        {/* 類別需求 */}
        <div className="box">
          <label htmlFor="category">需求類別：</label>
          <select
            className="form-select"
            aria-label="Default select example"
            style={{ width: "200px" }}
            value ={category}
            onChange={handleCategoryChange}
          >
            <option selected disabled>
              請選擇....
            </option>
            <option value="1">翻譯寫作</option>
            <option value="2">商攝娛樂</option>
            <option value="3">網頁設計</option>
          </select>
          <br />
          {/* 依不同的母類別找尋相對應的子類別 */}
          {category && (
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ width: "200p;x" }}
            >
              <option>子類別</option>
              {subCategories[category].map((subCategory) => (
                <option key={subCategory.value} value={subCategory.value}>
                  {subCategory.label}
                </option>
              ))}
            </select>
          )}
        </div>
        {/* 金額 */}
        <div className="box">
          <h4 htmlFor="caseMoney">預算金額 :</h4>
          <input type="number" id="caseMoney" placeholder="請輸入預期的金額" />
        </div>
        {/* 期限 */}
        <div className="box">
          <h4 htmlFor="caseMoney">期限 :</h4>
          <input type="radio" id="noTime" name="deadline" />
          <label htmlFor="noTime">不指定日期</label>
          <br />
          <input type="radio" name="deadline" id="yesTime" />
          <label htmlFor="yesTime">指定日期 </label>
          <input type="date" id="yesTime" />
        </div>
        {/* 地點 */}
        <div className="box">
          <h4>工作地點 :</h4>
          <input type="radio" id="noPlace" name="casePlace" />
          <label htmlFor="noPlace">不指定地點</label>
          <br />
          <input type="radio" name="casePlace" id="yesPlace" />
          <label htmlFor="yesPlace">指定地點</label>
          <input type="text" placeholder="請輸入指定地點" />
        </div>
        {/* 內容 */}
        <div className="box">
          <h4>工作內容 :</h4>
          <textarea
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
        {/* 檔案 */}
        <div className="box">
          <h4>是否需上傳照片或檔案供接案人參考</h4>
          <p>
            1. 最多可新增5個附件，每個大小不超過
            <span className="text-danger fw-bolder">2MB</span> 。
          </p>
          <p>
            2. 因案件上架後為公開頁面， 故
            <span className="text-danger fw-bolder">請勿</span>
            上傳內含個資圖片(如：個人名片或或其他聯絡方式)。
          </p>
          <input type="file" />
        </div>
        {/* 聯絡方式 */}
        <div className="box">
          <h4>聯絡資料</h4>
          <input type="text" placeholder="請輸入聯絡人名稱" />
          <h4>允許接案人透過電話聯絡您嗎?(哪種比較好)</h4>
          <input type="radio" id="phoneOK" name="phone" />
          <label htmlFor="phoneOK">允許</label>
          <input type="radio" id="phoneNO" name="phone" />
          <label htmlFor="phoneNO">不允許</label>
          <select className="form-select" aria-label="Default select example">
            <option selected disabled>
              請選擇...
            </option>
            <option value="1">允許</option>
            <option value="2">不允許</option>
          </select>
          <h4>請勾選希望接案人聯絡時段?</h4>
          <input type="checkbox" id="time0" name="time" />
          <label htmlFor="time0">上午00:00~上午08:00</label>
          <br />
          <input type="checkbox" id="time1" name="time" />
          <label htmlFor="time1">上午08:00~中午12:00</label>
          <br />
          <input type="checkbox" id="time2" name="time" />
          <label htmlFor="time2">下午13:00~下午17:00</label>
          <br />
          <input type="checkbox" id="time3" name="time" />
          <label htmlFor="time3">晚上17:00~晚上24:00</label>
          <br />
        </div>
        {/* btn */}
        <div className="box d-flex justify-content-evenly">
          <button type="button" className="btn btn-secondary ">
            儲存至草稿
          </button>
          <button type="button" className="btn btn-primary">
            發布案件
          </button>
        </div>
      </div>
    </main>
  );
}

export default Proposal;
