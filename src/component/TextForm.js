import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpChange = () => {
    // console.log("Upper Case Clicked......." + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handelclrChange = () => {
    // console.log("Upper Case Clicked......." + text);
    let newtext = " ";
    setText(newtext);
  };
  const handelspChange = () => {
    // console.log("Upper Case Clicked......." + text);
    let newtext = text.replace(/\s+/g, "");
    setText(newtext);
  };
  const handelowChange = () => {
    // console.log("Upper Case Clicked......." + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handelonChange = (event) => {
    // console.log("on Case Clicked.......");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div>
        <div className="container">
          <h1>{props.Heading}</h1>
        </div>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handelonChange}
            className="form-control"
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpChange}>
          Convert To Upper Class
        </button>
        <button className="btn btn-dark mx-2" onClick={handelowChange}>
          Convert To Lower Class
        </button>
        <button className="btn btn-warning mx-2" onClick={handelspChange}>
          Remove Space
        </button>
        <button className="btn btn-info mx-2" onClick={handelclrChange}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Test Summery</h1>
        <h4>
          {text.split(" ").length} Words and {text.length} Character.{" "}
        </h4>
        <h1 className="my-3">Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
