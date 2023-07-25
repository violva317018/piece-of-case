import React, { useContext, useEffect } from "react";
import "./takethecaserecord.css";
import { Link } from "react-router-dom";
import { GlobelDate } from "../App";
import Quoted from "./takethecaserecord_components/Quoted";
import Closed from "./takethecaserecord_components/Closed";
import Working from "./takethecaserecord_components/Working";
import UnClinch from "./takethecaserecord_components/UnClinch";
import Auth from "../axios/Auth";

function TakeTheCaseRecord(props) {
  const { takethecase, setTakethecase } = useContext(GlobelDate);
  const {
    currentProposeState,
    currentProposePages,
    currentProposeCases,
    setCurrentProposeState,
    setCurrentProposePages,
    setCurrentProposeCases,
    handleDelete,
  } = props;
  // 渲染資料
  useEffect(() => {
    Auth.getBidderCase(
      JSON.parse(localStorage.getItem("userID")),
      currentProposeState
    )
      .then((result) => {
        console.log(result["data"]);
        setCurrentProposeCases(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentProposeState]);
  return (
    <div className="recordDiv">
      <div className="d-flex recordDiv1">
        <div
          className="recordDiv2"
          onClick={() => {
            setTakethecase(1);
            setCurrentProposeState("已報價");
          }}
          style={{ backgroundColor: takethecase === 1 && "#ffa500" }}
        >
          <Link className="white1">已報價</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => {
            setTakethecase(2);
            setCurrentProposeState("未成交");
          }}
          style={{ backgroundColor: takethecase === 2 && "#ffa500" }}
        >
          <Link className="white1">未成交</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => {
            setTakethecase(3);
            setCurrentProposeState("進行中");
          }}
          style={{ backgroundColor: takethecase === 3 && "#ffa500" }}
        >
          <Link className="white1">進行中</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => {
            setTakethecase(4);
            setCurrentProposeState("已結案");
          }}
          style={{ backgroundColor: takethecase === 4 && "#ffa500" }}
        >
          <Link className="white1">已結案</Link>
        </div>
      </div>
      {takethecase === 1 && (
        <Quoted currentProposeCases={currentProposeCases} />
      )}
      {takethecase === 2 && (
        <UnClinch
          currentProposeCases={currentProposeCases}
          handleDelete={handleDelete}
        />
      )}
      {takethecase === 3 && (
        <Working currentProposeCases={currentProposeCases} />
      )}
      {takethecase === 4 && (
        <Closed currentProposeCases={currentProposeCases} />
      )}
    </div>
  );
}

export default TakeTheCaseRecord;

/*

已報價 => caseID
未成交 => caseID、 報價日期
進行中 => caseID、成交日期、階段數量、案件進度、deadLine0、deadLine1、階段1結清、階段2結清
已結案 => 直接報錯
CALL proposeCase(40,'已結案',1);

*/
