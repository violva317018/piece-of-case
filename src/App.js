import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import TakeTheCase from "./pages/TakeTheCase";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"}element={ <Home />}/>
        <Route path={"/proposal"}element={ <Proposal />}/>
        <Route path={"/allCase"} element={ <TakeTheCase />}/>
      </Routes>     
      <Footer />
    </div>
  );
}

export default App;
