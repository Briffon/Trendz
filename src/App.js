import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes";
import Navbar from "./components/navbar";
import Header from "./components/header";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <img src={require("./assets/cart.png")} />
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
