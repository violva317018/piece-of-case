import React, { useState, useContext, useEffect } from "react";
import "./proposal.css";
import { GlobelDate } from '../App'
import Case from "../axios/Case";
import locationData from '../locationData'


function Proposal() {
  // 獲得地區假資料
  const subLocations = locationData
  // 選擇全域變數
  const { } = useContext(GlobelDate)
  // 儲存選擇的母、子類別
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  // 儲存選擇地區的母、子類別
  const [location, setLocation] = useState("");
  const [subLocation, setSubLocation] = useState("");
  // 表單資料
  const [caseStatus, setCaseStatus] = useState("");
  const [caseName, setCaseName] = useState("");
  const [caseBudget, setCaseBudget] = useState("");
  const [caseDeadline, setCaseDeadline] = useState(null);
  const [caseLocation, setCaseLocation] = useState(null);
  const [caseDescription, setCaseDescription] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  // 儲存可連絡時間
  const [caseContactTime, setCaseContactTime] = useState("0000");
  const [caseContactTimeItem0, setCaseContactTimeItem0] = useState("0");
  const [caseContactTimeItem1, setCaseContactTimeItem1] = useState("0");
  const [caseContactTimeItem2, setCaseContactTimeItem2] = useState("0");
  const [caseContactTimeItem3, setCaseContactTimeItem3] = useState("0");
  // 儲存5張圖片
  const [caseImage1, setCaseImage1] = useState(null);
  const [caseImage2, setCaseImage2] = useState(null);
  const [caseImage3, setCaseImage3] = useState(null);
  const [caseImage4, setCaseImage4] = useState(null);
  const [caseImage5, setCaseImage5] = useState(null);


  // handle function 
  const handleCaseName = (event) => { setCaseName(event.target.value) }
  const handleCaseBudget = (event) => { setCaseBudget(event.target.value) }
  const handleCaseDeadline = (event) => { setCaseDeadline(event.target.value) }
  const handleCaseDescription = (event) => { setCaseDescription(event.target.value) }
  const handleContactName = (event) => { setContactName(event.target.value) }
  const handleContactPhone = (event) => { setContactPhone(event.target.value) }
  const handleCaseContactTimee = (event) => {
    // setCaseContactTime(event.target.checked)
    const isChecked = (bool) => {
      if (bool) {
        return '1'
      } else {
        return '0'
      }
    }
    if (event.target.id === 'time0') {
      // 取得當前是否 checked，並儲存至相對應的 Item 供其他狀態判斷
      setCaseContactTimeItem0(isChecked(event.target.checked))
      // 儲存四個input狀態
      setCaseContactTime(`${isChecked(event.target.checked)}${caseContactTimeItem1}${caseContactTimeItem2}${caseContactTimeItem3}`)
    } else if (event.target.id === 'time1') {
      setCaseContactTimeItem1(isChecked(event.target.checked))
      setCaseContactTime(`${caseContactTimeItem0}${isChecked(event.target.checked)}${caseContactTimeItem2}${caseContactTimeItem3}`)
    } else if (event.target.id === 'time2') {
      setCaseContactTimeItem2(isChecked(event.target.checked))
      setCaseContactTime(`${caseContactTimeItem0}${caseContactTimeItem1}${isChecked(event.target.checked)}${caseContactTimeItem3}`)
    } else {
      setCaseContactTimeItem3(isChecked(event.target.checked))
      setCaseContactTime(`${caseContactTimeItem0}${caseContactTimeItem1}${caseContactTimeItem2}${isChecked(event.target.checked)}`)
    }
  }

  // 定義類別
  const subCategories = {
    A: [
      { value: "A01", label: "才藝" },
      { value: "A02", label: "升學" },
      { value: "A03", label: "語言" },
    ],
    B: [
      { value: "B01", label: "清潔外包" },
      { value: "B02", label: "家庭代工" },
      { value: "B03", label: "水電維修" },
    ],

  };


  //  取得當前母類別資料
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };
  //  取得當前子類別資料
  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
    console.log(event.target.value);
  };
  //  取得當前母類別資料
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log(event.target.value);
  };
  //  取得當前子類別資料
  const handleSubLocationChange = (event) => {
    setSubLocation(event.target.value);
    console.log(event.target.value);
  };

  // 處理 => 發布案件
  const handlePublishCase = () => {
    setCaseStatus('發布案件')
    let token = JSON.parse(localStorage.getItem('userInfo')).token
    Case.proposal(token, caseName, category, subCategory, caseBudget, caseDeadline, location, subLocation, caseDescription, contactName, contactPhone, caseContactTime, caseStatus, caseImage1, caseImage2, caseImage3, caseImage4, caseImage5).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.error(err)
    });
    // console.log(caseContactTime)
  }

  // 處理 => 儲存至草稿
  const handleDraftCase = () => {
    setCaseStatus('儲存至草稿')
    setCaseLocation(`${location}${subLocation}`)
    let token = JSON.parse(localStorage.getItem('userInfo')).token
    Case.proposal(token, caseName, category, subCategory, caseBudget, caseDeadline, caseLocation, caseDescription, contactName, contactPhone, caseContactTime, caseStatus, caseImage1, caseImage2, caseImage3, caseImage4, caseImage5).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.error(err)
    });
    // console.log(caseContactTime)
  }

  // 處理地區結合
  useEffect(() => { }, [])
  return (
    <main className="container">
      <div className="caseBox">
        {/* 案件名稱 */}
        <div className="box">
          <h4 className="">案件名稱 :</h4>
          <input type="text" placeholder="請填寫案件名稱" onChange={handleCaseName} />
        </div>

        {/* 類別需求 */}
        <div className="box">
          <label htmlFor="category">需求類別：</label>
          <select
            className="form-select"
            aria-label="Default select example"
            style={{ width: "200px" }}
            // value={category}
            onChange={handleCategoryChange}
          >
            <option selected disabled >請選擇....</option>
            <option value="A">家教課程</option>
            <option value="B">生活服務</option>
          </select>
          <br />
          {/* 依不同的母類別找尋相對應的子類別 */}
          {category && (
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ width: "200p;x" }}
              onChange={handleSubCategoryChange}
            >
              <option selected disabled>請選擇...</option>
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
          <input type="number" id="caseMoney" placeholder="請輸入預期的金額" onChange={handleCaseBudget} />
        </div>
        {/* 期限 */}
        <div className="box">
          <h4 htmlFor="caseMoney">期限 :</h4>
          <input type="radio" id="noTime" name="deadline" />
          <label htmlFor="noTime">不指定日期</label>
          <br />
          <input type="radio" name="deadline" id="yesTime" />
          <label htmlFor="yesTime">指定日期 </label>
          <input type="date" id="yesTime" onChange={handleCaseDeadline} />
        </div>
        {/* 地點 */}
        <div className="box">
          <label htmlFor="locationCategory">工作地點 : </label>
          <select
            className="form-select"
            aria-label="Default select example"
            style={{ width: "200px" }}
            onChange={handleLocationChange}
          >
            <option selected disabled >請選擇....</option>
            <option value="台北市">台北市</option>
            <option value="新北市">新北市</option>
            <option value="台中市">台中市</option>
            <option value="台南市">台南市</option>
            <option value="高雄市">高雄市</option>
          </select>
          <br />
          {/* 依不同的母類別找尋相對應的子類別 */}
          {location && (
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ width: "200p;x" }}
              onChange={handleSubLocationChange}
            >
              <option selected disabled>請選擇...</option>
              {subLocations[location].map((subLocation) => (
                <option key={subLocation.value} value={subLocation.value}>
                  {subLocation.label}
                </option>
              ))}
            </select>
          )}
        </div>
        {/* 內容 */}
        <div className="box">
          <h4>工作內容 :</h4>
          <textarea
            className="form-control"
            aria-label="With textarea"
            onChange={handleCaseDescription}
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
          <input type="text" placeholder="請輸入聯絡人名稱" onChange={handleContactName} />
          <h4>允許接案人透過電話聯絡您嗎?(哪種比較好)</h4>
          <input type="radio" id="phoneOK" name="phone" />
          <label htmlFor="phoneOK">允許</label>
          <input type="radio" id="phoneNO" name="phone" />
          <label htmlFor="phoneNO">不允許</label>
          <select className="form-select" aria-label="Default select example">
            <option selected disabled onChange={handleContactPhone}>
              請選擇...
            </option>
            <option value="1">允許</option>
            <option value="2">不允許</option>
          </select>
          <h4>請勾選希望接案人聯絡時段?</h4>
          <input type="checkbox" id="time0" name="time" onClick={handleCaseContactTimee} />
          <label htmlFor="time0" value='1' >上午00:00~上午08:00</label>
          <br />
          <input type="checkbox" id="time1" name="time" onClick={handleCaseContactTimee} />
          <label htmlFor="time1">上午08:00~中午12:00</label>
          <br />
          <input type="checkbox" id="time2" name="time" onClick={handleCaseContactTimee} />
          <label htmlFor="time2">下午13:00~下午17:00</label>
          <br />
          <input type="checkbox" id="time3" name="time" onClick={handleCaseContactTimee} />
          <label htmlFor="time3">晚上17:00~晚上24:00</label>
          <br />
        </div>
        {/* btn */}
        <div className="box d-flex justify-content-evenly">
          <button type="button" className="btn btn-secondary" onClick={handleDraftCase}>
            儲存至草稿
          </button>
          <button type="button" className="btn btn-primary" onClick={handlePublishCase}>
            發布案件
          </button>
        </div>
      </div>
    </main>
  );
}

export default Proposal;
