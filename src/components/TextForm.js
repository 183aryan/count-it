import React, { useState } from "react";

export default function TextForm(props) {
    
    const handleUpClick = () => {
        console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }

    const handleDownClick = () => {
      console.log(text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase", "success");
    }  

    const handleClearClick = () => {
      console.log(text);
      let newText = " ";
      setText(newText);
      props.showAlert("everything is cleared", "success");
    }

    const handleCopy = () => {
      let newText = document.getElementById("myBox");
      newText.select();
      navigator.clipboard.writeText(newText.value);
      document.getSelection().removeAllRanges();
      props.showAlert("copied to clipboard", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");

   return (
    <>
    <div className="container" style={{color: props.mode === "dark" ? "white":"black"}}>
    <h1 style = {{color: props.mode === "dark" ? "white":"black"}}>{props.heading}</h1>
       <div className="mb-3">
       <textarea
          className="form-control"
          value = {text}
          onChange = {handleOnChange}
          id="myBox"
          style={{backgroundColor: props.mode === "dark" ? "rgb(191 200 207)":"white", color: props.mode === "dark" ? "white":"black"}}
          rows="8"
        >
        </textarea>

       </div>
       <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDownClick} >Convert to Lowercase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick} >Clear text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} >Copy text</button>
       </div>
    <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((ele) => {return ele.length !== 0}).length} words and {text.length} characters. </p>
    <p>Speed - {0.008 * text.split(" ").filter((ele) => {return ele.length !== 0}).length}</p>
    <h3>Preview</h3>
    <p>{text.length > 0 ? text : "Nothing to preview"}</p>   
    </div>
    </>
  );
}
