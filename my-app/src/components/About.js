import React, {useState} from 'react';

export default function About() {
    let [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    });
    let [btnText, setBtnText] = useState("Enable Dark Mode");
    let [btnClass, setBtnClass] = useState("btn btn-dark");

    const ToggleMode = () => {
        if (myStyle.color === "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            })
            setBtnText("Enable Light Mode");
            setBtnClass("btn btn-light")
        }
        else {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText("Enable Dark Mode");
            setBtnClass("btn btn-dark")
        }
    }

  return (
    <div>
        <div className="container" style={myStyle}>
            <h1>Dark Mode</h1>
            <p>The Dark Mode is working.....</p>
            <h1>D</h1>
            <h1>A</h1>
            <h1>R</h1>
            <h1>K</h1>
        <div className="container my-3" style={myStyle}>
            <button onClick={ToggleMode} className={btnClass} >{btnText}</button>
        </div>
        </div>
    </div>
  )
}
