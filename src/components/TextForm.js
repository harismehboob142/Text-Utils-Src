import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    setHead("Uppercase Button");
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleloClick = () => {
    setText(text.toLowerCase());
    setHead("Lowercase Button");
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClear = () => {
    setText("");
    setHead("Clear Button");
    props.showAlert("Text Area Cleared", "success");
  };
  const handleSenClick = () => {
    let txt = text.charAt(0).toUpperCase() + text.slice(1);
    props.showAlert("Capitalized", "success");

    // for(let i =1;i<text.length-1;i++){
    //     txt+=text[i];
    // }
    setText(txt);
    setHead("Sentence case");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    if (text.split(" ").length - 1 > 0) {
      changeWord("words");
    } else {
      changeWord("word");
    }
  };

  const [text, setText] = useState("");
  const [head, setHead] = useState("");
  const [word, changeWord] = useState("word");

  return (
    <>
      <div className="container" style={props.headMode}>
        <h1 style={props.headMode}>
          {props.masterHead} - {head}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#03112F",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSenClick}>
          Sentence case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy to Clipboard
        </button>
      </div>
      <div className="container my-2" style={props.headMode}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length - 1} {word} and {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} minutes to read the text</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter some text in box above"}</p>
      </div>
    </>
  );
}
TextForm.defaultProps = {
  masterHead: "Default master heading",
};
