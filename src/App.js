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
      {/* <Home /> */}
      <Proposal />
      {/* <TakeTheCase /> */}
      <Footer />
    </div>
  );
}

export default App;
