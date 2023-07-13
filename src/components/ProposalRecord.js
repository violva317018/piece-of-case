import React, { useContext } from "react";
import "./proposalrecord.css";
import { GlobelDate } from "../App";
import { Link } from "react-router-dom";
import Draft from "./proposalrecord_components/Draft";
import Publishing from "./proposalrecord_components/Publishing";
import Working from "./proposalrecord_components/Working";
import Removed from "./proposalrecord_components/Removed";
import Completed from "./proposalrecord_components/Completed";

function ProposalRecord() {
  const { proposal, setProposal } = useContext(GlobelDate);

  return (
    <div className="recordDiv">
      <div className="d-flex recordDiv1">
        <div
          className="recordDiv2"
          onClick={() => setProposal(1)}
          style={{ backgroundColor: proposal == 1 && "#ffa500" }}
        >
          <Link className="white1">草稿</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => setProposal(2)}
          style={{ backgroundColor: proposal == 2 && "#ffa500" }}
        >
          <Link className="white1">刊登中</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => setProposal(3)}
          style={{ backgroundColor: proposal == 3 && "#ffa500" }}
        >
          <Link className="white1">進行中</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => setProposal(4)}
          style={{ backgroundColor: proposal == 4 && "#ffa500" }}
        >
          <Link className="white1">已下架</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => setProposal(5)}
          style={{ backgroundColor: proposal == 5 && "#ffa500" }}
        >
          <Link className="white1">已完成</Link>
        </div>
      </div>
      {proposal == 1 && <Draft />}
      {proposal == 2 && <Publishing />}
      {proposal == 3 && <Working />}
      {proposal == 4 && <Removed />}
      {proposal == 5 && <Completed />}
    </div>
  );
}

export default ProposalRecord;
