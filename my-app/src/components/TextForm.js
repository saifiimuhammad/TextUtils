import React, { useState } from 'react'; // Importing react and useState here
import PropTypes from 'prop-types';    // Importing propTypes here
import {marked} from 'marked';

export default function TextForm(props) {

    // useState text variable
    const [text, setText] = useState("");

    // This function is used to convert text to Upper case.
    const handleUpChange = () => {
        let newText = text.toUpperCase();
        setText(newText);
        console.log("Changed to Uppercase.");
    };

    // This function is used to convert text to Lower case.
    const handleLoChange = () => {
        let newText = text.toLowerCase();
        setText(newText);
        console.log("Changed to Uppercase.");
    };

    // This function will run when the user writes anything in the text area.
    const handleOnChange = (event) => {
        console.log("Text is changing...");
        setText(event.target.value);
    };

    // This function is used to capitalize each word in the text.
    const CapitalizeEachWord = () => {
        const toggledText = text.split(' ').map((char) => {
            // return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
            return char.charAt(0).toUpperCase() + char.slice(1);

        }).join(' ');
        setText(toggledText);
    }

    // This function is used to clear the text area
    const handleClearFunc = () => {
        let clearText = "";
        setText(clearText)
        props.showAlert(`Text area has been cleared.`, `Success`)
    }

    // This function is used to remove whitespaces from the text
    const handleWhitespace = () => {
        const formattedText = text.replace(/\s+/g, ' ');
        setText(formattedText);
    }

    // This function converts the text to HTML
    const handleTexttoHTML = () => {
        const convertedText = marked(text);
        setText(convertedText)
    }


    return (

        // JSX code here
        <div className={`container`}>
            <div>
                <div className="row">
                    <div className="col-7">
                <h1 className="my-3">{props.heading}</h1>
                    </div>
                    <div className="col-5 main-btn">
                        <button className="btn  btn-danger" onClick={handleClearFunc}>Clear Text</button>
                    </div>
                </div>
                <textarea className="form-control textarea" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter your text here..."></textarea>

                {/* All the buttons with amazing functions below: */}
                <div className="my-3 functions-btn-container">
                    <button className={`btn btn-${props.Btn}`} onClick={handleUpChange}>Uppercase</button>
                    <button className={`btn btn-${props.Btn}`} onClick={handleLoChange}>Lowercase</button>
                    <button className={`btn btn-${props.Btn}`} onClick={CapitalizeEachWord}>Capitalize</button>
                    <button className={`btn btn-${props.Btn}`} onClick={handleWhitespace}>Remove Whitespaces</button>
                    <button className={`btn btn-${props.Btn}`} onClick={handleTexttoHTML}>Convert to HTML</button>
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