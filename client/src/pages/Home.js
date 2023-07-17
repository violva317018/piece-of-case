import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <main>
        <div className="d-flex justify-content-evenly pt-5">
          <Link to="/proposal" className="d-block">
            <div className="get-case case-box">提案</div>
          </Link>
          <Link to="/allCase">
            <div className="send-case case-box">接案</div>
          </Link>
        </div>
        <div className="mt-5 fs-1 text-center">最方便、快速的接案平台</div>
      </main>
    </div>
  );
}

export default Home;
