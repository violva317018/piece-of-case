import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import TakeTheCase from "./pages/TakeTheCase";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/proposal"} element={<Proposal />} />
        <Route path={"/allCase"} element={<TakeTheCase />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
