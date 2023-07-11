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
import React from "react";

// create useContext => 使跨組件的資料可以傳遞
export const GlobelDate = React.createContext({})

function App() {
  return (
    <>
      {/* 提供 GlobelDate 內的所有資料給被包含的所有組件 */}
      <GlobelDate.Provider value={{
        aID: 1, // 建案子的使用者id
        bID: 2 // 目前使用者id
      }}>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/proposal"} element={<Proposal />} />
          <Route path={"/allCase"} element={<AllCase />} />
          <Route path={"/CaseView"} element={<CaseView />} />
        </Routes>
        <Footer />
      </GlobelDate.Provider>
    </>
  );
}

export default App;
