// 剩下 進行中 還沒弄

import React, { useContext, useEffect } from "react";
import "./proposalrecord.css";
import { GlobelDate } from "../App";
import { Link } from "react-router-dom";
import Draft from "./proposalrecord_components/Draft";
import Publishing from "./proposalrecord_components/Publishing";
import Working from "./proposalrecord_components/Working";
import Removed from "./proposalrecord_components/Removed";
import Completed from "./proposalrecord_components/Completed";
import Auth from "../axios/Auth";

function ProposalRecord(props) {
  const { proposal, setProposal } = useContext(GlobelDate);
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
    // CALL proposeCase(40,'進行中',1); 會報錯
    Auth.getProposeCase(
      JSON.parse(localStorage.getItem("userID")),
      currentProposeState,
      currentProposePages
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
            setProposal(1);
            setCurrentProposeState("草稿");
          }}
          style={{ backgroundColor: proposal === 1 && "#ffa500" }}
        >
          <Link className="white1">草稿</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => {
            setProposal(2);
            setCurrentProposeState("刊登中");
          }}
          style={{ backgroundColor: proposal === 2 && "#ffa500" }}
        >
          <Link className="white1">刊登中</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => {
            setProposal(3);
            setCurrentProposeState("進行中");
          }}
          style={{ backgroundColor: proposal === 3 && "#ffa500" }}
        >
          <Link className="white1">進行中</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => {
            setProposal(4);
            setCurrentProposeState("已下架");
          }}
          style={{ backgroundColor: proposal === 4 && "#ffa500" }}
        >
          <Link className="white1">已下架</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => {
            setProposal(5);
            setCurrentProposeState("已完成");
          }}
          style={{ backgroundColor: proposal === 5 && "#ffa500" }}
        >
          <Link className="white1">已完成</Link>
        </div>
      </div>
      {proposal === 1 && (
        <Draft
          currentProposeCases={currentProposeCases}
          handleDelete={handleDelete}
        />
      )}
      {proposal === 2 && (
        <Publishing currentProposeCases={currentProposeCases} />
      )}
      {proposal === 3 && <Working currentProposeCases={currentProposeCases} />}
      {proposal === 4 && <Removed currentProposeCases={currentProposeCases} />}
      {proposal === 5 && (
        <Completed currentProposeCases={currentProposeCases} />
      )}
    </div>
  );
}

export default ProposalRecord;
