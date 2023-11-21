import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



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


  const HandleToggle = () => {
    if (text === "Dark Mode") {
      setToggleBtn("Dark");
      setText("Light Mode");
      setMode("dark");
      setBtn("dark");
      showAlert("Dark mode has been enabled.", "Success");
      document.title = `TextUtils - Home (Dark)`;
    } else {
      setToggleBtn("Light");
      setText("Dark Mode");
      setMode("light");
      setBtn("primary");
      showAlert("Light mode has been enabled.", "Success");
      document.title = `TextUtils - Home (Light)`;
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TextForm heading = "Enter The Text Below to Analyze" Btn = {Btn} />,
    },
    {
      path: "/about",
      element: <About/>,
    }
  ]);

  

  return (
    <>
      <React.StrictMode>
        <div className={`main main-${mode}`}>
        <Navbar title = "TextUtils" navBtn2 = "About Us"  mode = {mode} text = {text} ToggleBtn = {ToggleBtn} HandleToggle = {HandleToggle} />
        <Alert alert = {alert}/>
        <RouterProvider router={router} />
        </div>
      </React.StrictMode>
    </>
  );
}

export default App;
