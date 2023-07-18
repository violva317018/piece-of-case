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
import socket from "./socket";

// create useContext => 使跨組件的資料可以傳遞
export const GlobelDate = React.createContext({});

function App() {
  // chat --- start
  const [usersList, addUsers] = useState([]);
  // When the user is added
  // const getUsername = (fetched_userName) => {
  //   setUserName(fetched_userName);
  //   socket.auth = { fetched_userName };
  //   socket.connect();
  // };
  // 更新 user.self 狀態
  socket.on("users", (users) => {
    console.log(users);
    users.forEach((user) => {
      // 透過該網頁的 socket.id 與 userID 判斷是否為本人
      user.self = user.userID === socket.id;
    });
    addUsers(users);
  });
  socket.on("user connect", (user) => {
    addUsers([...usersList, user]);
  });

  // chat --- end

  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("myLogin"))
  );

  // 給註冊登入使用
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userHashPassword, setUserHashPassword] = useState("");


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
          setUserName, setUserEmail, setUserPassword, setUserHashPassword, userName, userEmail, userPassword, userHashPassword
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
          <Route path={"/ChatRoom "} element={<ChatRoom />} />
        </Routes>
        <Footer />
      </GlobelDate.Provider>
    </>
  );
}

export default App;
