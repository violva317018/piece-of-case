import React, { useContext } from "react";
import "./takethecaserecord.css";
import { Link } from "react-router-dom";
import { GlobelDate } from "../App";
import Quoted from "./takethecaserecord_components/Quoted";
import Closed from "./takethecaserecord_components/Closed";

function TakeTheCaseRecord() {
  const { takethecase, setTakethecase } = useContext(GlobelDate);

  return (
    <div className="recordDiv">
      <div className="d-flex recordDiv1">
        <div className="recordDiv2">
          <Link className="white1" onClick={() => setTakethecase(1)}>
            已報價
          </Link>
        </div>
        <div className="recordDiv2">
          <Link className="white1" onClick={() => setTakethecase(2)}>
            已結案
          </Link>
        </div>
      </div>
      {takethecase == 1 && <Quoted />}
      {takethecase == 2 && <Closed />}
    </div>
  );
}

export default TakeTheCaseRecord;
