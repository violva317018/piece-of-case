import React from "react";
import "./userinfo.css";

function UserInfo(props) {
  const { price } = props;
  return (
    <div className="user-info">
      {/* 案主資訊 */}
      <h1 className="text-center ">案主資訊</h1>
      <div className="d-flex justify-content-evenly">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsxapGtZ2ZF9bbIB_w4Htfi6Del7RBJs-uQ&usqp=CAU"
          width={"100"}
          alt="img"
        />
        <div className="profile-info">
          <p>XXX股份有限公司</p>
          <p>邱先生</p>
        </div>
      </div>
      <p>案主自介............................</p>
      {/* 自我推薦 */}
      <div className="input-group input-group-lg">
        <span
          className="input-group-text"
          id="inputGroup-sizing-lg"
          style={{ padding: "0" }}
        >
          自我推薦
        </span>
        <textarea
          type="text"
          rows={"5"}
          style={{ margin: 0 }}
          className="form-control"
          placeholder="請輸入您的自我推薦"
        ></textarea>
      </div>
      {/* 顯示報價需花多少錢 */}
      <div>此任務報價需花費 {price * 0.01}元</div>
      {/* 報價金額 */}
      <div className="input-group input-group-lg">
        <span
          className="input-group-text"
          id="inputGroup-sizing-lg"
          style={{ padding: "0" }}
        >
          報價金額
        </span>
        <input
          type="text"
          style={{ margin: 0 }}
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="請輸入您的報價"
        />
      </div>
      {/* 我要報價 */}
      <button
        type="button"
        className="btn btn-secondary"
        onClick={console.log(price * 0.01)}
      >
        我要報價
      </button>
    </div>
  );
}

export default UserInfo;
