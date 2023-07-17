import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import AllCase from "./pages/AllCase";
import CaseView from "./pages/CaseView";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PersonalInfo from "./pages/PersonalInfo";
import React, { useState } from "react";
import ChatRoom from "./pages/ChatRoom";
import Scheme from "./pages/Scheme";
import CheckInfo from "./pages/CheckInfo";

// create useContext => 使跨組件的資料可以傳遞
export const GlobelDate = React.createContext({});

function App() {
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("myLogin"))
  );

  const [infoData, setInfoData] = useState("1");

  const [proposal, setProposal] = useState("1");

  const [takethecase, setTakethecase] = useState("1");
  return (
    <>
      {/* 提供 GlobelDate 內的所有資料給被包含的所有組件 */}
      <GlobelDate.Provider
        value={{
          currentUserID: "A02", // 目前使用者id
          login,
          setLogin,
          infoData, //我的帳戶目前位置
          setInfoData,
          proposal, //提案紀錄目前位置
          setProposal,
          takethecase, //接案紀錄目前位置
          setTakethecase,
        }}
      >
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/PersonalInfo"} element={<PersonalInfo />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/proposal"} element={<Proposal />} />
          <Route path={"/allCase"} element={<AllCase />} />
          <Route path={"/CaseView"} element={<CaseView />} />
          <Route path={"/chatRoom"} element={<ChatRoom />} />
          <Route path={"/Scheme"} element={<Scheme />} />
          <Route path={"/checkInfo"} element={<CheckInfo />} />
        </Routes>
        <Footer />
      </GlobelDate.Provider>
    </>
  );
}

export default App;
