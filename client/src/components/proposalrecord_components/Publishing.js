import React from "react";
import "./publishing.css";
import Auth from "../../axios/Auth";

function Publishing(props) {
  const { currentProposeCases } = props;
  const handleCancel = (caseID) => {
    Auth.cancelCase(caseID)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 刊登中案子的陣列
  // const publishCases = [
  //   {
  //     創建者id: "A01",
  //     caseId: "1",
  //     案件名稱: "RWD網站設計",
  //     預算金額: "5萬",
  //     報價數: "2／5",
  //   },
  //   {
  //     創建者id: "A02",
  //     caseId: "2",
  //     案件名稱: "阿巴巴語言家教",
  //     預算金額: "15萬",
  //     報價數: "4／5",
  //   },
  //   {
  //     創建者id: "A03",
  //     caseId: "3",
  //     案件名稱: "清潔馬桶",
  //     預算金額: "5千",
  //     報價數: "1／5",
  //   },
  //   {
  //     創建者id: "A41",
  //     caseId: "4",
  //     案件名稱: "遛狗",
  //     預算金額: "1萬",
  //     報價數: "5／5",
  //   },
  // ];

  // handle function
  // 我要得到該案件的ID 與 創建者ID

  return (
    <div>
      {/* 利用陣列渲染 */}
      {currentProposeCases.length !== 0 ? (
        currentProposeCases.map((item) => (
          <div
            className="recordDiv3"
            key={item.caseID}
            onClick={() => {
              console.log(item["caseID"]);
            }}
          >
            <div className="d-flex align-items-center" key={item.caseID}>
              <span className="span1 flex-grow-1">案件名稱</span>
              <span className="span1 flex-grow-1">預算金額</span>
              <span className="span1 flex-grow-1">報價數</span>
              <span className="span1 del1">操作</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="span2 flex-grow-1">{item["caseName"]}</span>
              <span className="span2 flex-grow-1">{item["budget"]}</span>
              <span className="span2 flex-grow-1">
                {item["bidders_count"] === null ? 0 : item["bidders_count"]} / 5
              </span>
              <span className="span2 del1">
                <div
                  className="del2"
                  onClick={() => {
                    handleCancel(item.caseID);
                  }}
                >
                  下架
                </div>
              </span>
            </div>
          </div>
        ))
      ) : (
        <h1>尚未刊登案件</h1>
      )}
    </div>
  );
}

export default Publishing;
