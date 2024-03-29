import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!" , "success");
  };
  const handleLowClick = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!" , "success");
  };
  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied text!" , "success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("ExtraSpaces removed!" , "success");
  }
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   text = "new text" // wrong method to change the state : not works
  // setText("Enter text here 2"); // correct method to change the state
  return (
    <>
      <div className="container" style={{color : props.mode === 'light'?'black':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            onChange={handleOnChange}
            id="myBox"
            className="form-control"
            rows="8"
            value={text}
            style={{backgroundColor : props.mode === 'light'?'white':'grey' , color : props.mode === 'light'?'black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2" style={{color : props.mode === 'light'?'black':'white'}}>
        <h1>Your text summar</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
      </div>
    </>
  );
}
