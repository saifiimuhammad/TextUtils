import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js'
import Alert from './components/Alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';





function App() {
  let [text, setText] = useState(`Dark Mode`);
  let [ToggleBtn, setToggleBtn] = useState("Light");
  let [mode, setMode] = useState("light");
  let [Btn, setBtn] = useState("primary");
  let [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Function to Handle the Dark and Light modes
  const HandleToggle = () => {
    if (text === "Dark Mode") {
      setToggleBtn("outline-light");
      setText("Light Mode");
      setMode("dark");
      setBtn("dark");
      showAlert("Dark mode has been enabled.", "Success");
    } else {
      setToggleBtn("outline-dark");
      setText("Dark Mode");
      setMode("light");
      setBtn("primary");
      showAlert("Light mode has been enabled.", "Success");
    }
  };

  return (
    <Router>
    <div>
      <Navbar title="TextUtils" navBtn2="About Us" mode={mode} text={text} ToggleBtn={ToggleBtn} HandleToggle={HandleToggle} />
      <div className={`main main-${mode} py-1`}>
        <div className="alert-container">
          <Alert alert={alert} />
        </div>
        <Routes>
          <Route path = '/' element = {<TextForm heading="Enter The Text Below to Analyze" Btn={Btn} mode={mode} showAlert={showAlert}/>}/>
          <Route path = '/about' element ={<About/>}/>
        
        </Routes>

      </div>
    </div>
    </Router>
  );
}

export default App;
