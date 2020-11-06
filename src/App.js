import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
