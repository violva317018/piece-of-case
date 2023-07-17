import React, { useContext } from "react";
import "./takethecaserecord.css";
import { Link } from "react-router-dom";
import { GlobelDate } from "../App";
import Quoted from "./takethecaserecord_components/Quoted";
import Closed from "./takethecaserecord_components/Closed";
import Working from "./takethecaserecord_components/Working";

function TakeTheCaseRecord() {
  const { takethecase, setTakethecase } = useContext(GlobelDate);

  return (
    <div className="recordDiv">
      <div className="d-flex recordDiv1">
        <div
          className="recordDiv2"
          onClick={() => setTakethecase(1)}
          style={{ backgroundColor: takethecase == 1 && "#ffa500" }}
        >
          <Link className="white1">已報價</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => setTakethecase(2)}
          style={{ backgroundColor: takethecase == 2 && "#ffa500" }}
        >
          <Link className="white1">進行中</Link>
        </div>
        <div
          className="recordDiv2"
          onClick={() => setTakethecase(3)}
          style={{ backgroundColor: takethecase == 3 && "#ffa500" }}
        >
          <Link className="white1">已結案</Link>
        </div>
      </div>
      {takethecase == 1 && <Quoted />}
      {takethecase == 2 && <Working />}
      {takethecase == 3 && <Closed />}
    </div>
  );
}

export default TakeTheCaseRecord;
