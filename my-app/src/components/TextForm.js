import React, {useState} from 'react'; // Importing react and useState here
import PropTypes from 'prop-types';    // Importing propTypes here

export default function TextForm(props) {

    // My Functions to Event Listeners
    const handleUpChange = () => {
        let newText = text.toUpperCase();
        setText(newText);
        console.log("Changed to Uppercase.");
    };

    const handleLoChange = () => {
        let newText = text.toLowerCase();
        setText(newText);
        console.log("Changed to Uppercase.");
    };

    const handleOnChange = (event) => {
        console.log("Text is changing...");
        setText(event.target.value);
    };

    const handleCopy = () => {
        console.log("Copying the text...");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    };

    const handleConvert = () => {
        console.log("Converting HTML to JSX...");
        let text = document.getElementById("myBox");
        let newText = " ";
        text.forEach(e => {
            if(e === "class") {
                newText = e;
                newText = "className";
            }
        });
        setText(newText);
    }

    // useState
    const [text, setText] = useState("Enter Text Here...");

  return (

    // My JSX code here
    <div className="container">
        <div className="mb-3">
        <h1 className="my-3">{props.heading}</h1>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        <div className="my-3">
            <button className={`btn btn-${props.Btn} my-2 mx-2`} onClick={handleUpChange}>Convert to Uppercase</button>
            <button className={`btn btn-${props.Btn} my-2 mx-2`} onClick={handleLoChange}>Convert to Lowercase</button>
            <button className={`btn btn-${props.Btn} my-2 mx-2`} onClick={handleCopy}>Copy to Clipboard</button>
            <button className={`btn btn-${props.Btn} my-2 mx-2`} onClick={handleCopy}>Convert HTML to JSX</button>
        </div>
        <div>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words & {text.length} letters.</p>
            <p>{0.008 * text.split(" ").length} minutes to read.</p>
        </div>
        <div>
            <h2>Text Preview</h2>
            <p>{text}</p>
        </div>
        </div>
    </div>
  )
}

    // Defining my props its datatype and isRequired method
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};