import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes";
import Navbar from "./components/navbar";
import Header from "./components/header";
import "./main.scss";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
