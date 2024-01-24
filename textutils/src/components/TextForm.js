import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
  const [text, setText] = useState("Enter text here");
//   text = "new text" // wrong method to change the state : not works
// setText("Enter text here 2"); // correct method to change the state
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea onChange = {handleOnChange} id="myBox" className="form-control" rows="8" value = {text}></textarea>
      </div>
      <button className="btn btn-primary" onClick = {handleUpClick}>Convert to UpperCase</button>
    </div>
  );
}
