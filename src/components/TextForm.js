import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value); 
    }

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to UpperCase");
    }

    const handleLowClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to LowerCase");
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Cleared text");
    }

    const handleRemoveSpaces = () => {
        const newText = text.split(/\s+/).join(' ').trim();
        setText(newText);
        props.showAlert("Spaces removed");
    };

    const handleCopy = () => {
        let textArea = document.getElementById("mybox");
        if (textArea) {
            textArea.select();
            navigator.clipboard.writeText(textArea.value);
            props.showAlert("Text copied to clipboard");
        }
    }

    return (
        <div className="my-3">
            <h3>{props.heading}</h3>
            <div className="form-floating mt-2 mb-2">
                <textarea className="form-control" onChange={handleOnChange} id="mybox" value={text} style={{'height': '100px'}}></textarea>
                <label htmlFor="floatingTextarea2">{props.inside_text}</label>
            </div>
            <div className="buttons">
                <button type="button" onClick={handleUpClick} className="btn btn-info me-2">Uppercase</button>
                <button type="button" onClick={handleLowClick} className="btn btn-info me-2">Lowercase</button>
                <button type="button" onClick={handleClearClick} className="btn btn-info me-2">Clear</button>
                <button type="button" onClick={handleRemoveSpaces} className="btn btn-info me-2">Remove Extra Spaces</button>
                <button type="button" onClick={handleCopy} className="btn btn-info me-2">Copy Text</button>
            </div>
            <h6 className='mt-3'>{text.length} characters, {text.split(" ").length} words</h6>
        </div>
    );
}
