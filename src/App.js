import { useState } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { Route,Routes} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [headMode, toggleHeadMode] = useState({
    color: "black",
  });
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      toggleHeadMode({ color: "black" });
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode activated", "success");
    } else {
      setMode("dark");
      toggleHeadMode({ color: "white" });
      document.body.style.backgroundColor = "#03112F";
      showAlert("Light mode activated", "success");
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
    <Router>
    
    <Navbar
        title="TextUtils Blog"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
        headMode={headMode}
      />
      <Alert alert={alert} />

      <Routes>
        
        <Route exact path = "/about" element= {<About/>}/> 
        <Route exact path = "/" element = {<TextForm masterHead='Enter text to analyze' mode={mode}
          headMode={headMode} showAlert={showAlert}/>} />
          
      </Routes>
    </Router> 
      
    </>
  );
}

export default App;
