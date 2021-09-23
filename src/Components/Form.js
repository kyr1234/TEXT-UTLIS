import React, { useState } from "react";
import "./Form.css";

export default function Form({ mode, showalert, heading }) {
  const [text, setText] = useState(" ");
  let nowords = text.split(" ").filter((word) => {
    return word.length !== 0;
  }).length;
  let time = nowords * 0.008;

  const handlechange = (event) => {
    setText(event.target.value);
  };

  const handleclickchange = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    showalert("THE TEXT CHANGED TO LOWERCASE", "success");
  };

  const handleclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showalert("THE TEXT CHANGED TO UPPERCASE", "success");
  };

  const clearchat = () => {
    setText(" ");
    showalert("THE TEXTBOX IS CLEARED SUCCESSFULLY", "success");
  };

  const setnavigator = () => {
    navigator.clipboard.writeText(text.value);
  };

  const extraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    showalert("EXTRA SPACE REMOVED ", "success");
  };

  return (
    <>
      <div
        className="FORM"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <div className="container">
          <strong
            className="mb-3"
            htmlfor="exampleFormControlTextarea1"
            className="form-label"
          >
            {heading}
          </strong>
          <textarea
            className="my-3"
            style={{
              backgroundColor: mode === "dark" ? "#13466e" : "white",
              color: mode === "dark" ? "white" : "black"
            }}
            className="form-control"
            value={text}
            id="mytext"
            onChange={handlechange}
            rows="8"
          ></textarea>
          <div className="my-3">
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-3 my-1"
              onClick={handleclick}
            >
              CLICK FOR UPPERCASE
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary  mx-3 my-1"
              onClick={handleclickchange}
            >
              CLICK FOR LOWERCASE
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary  mx-3 my-1"
              onClick={clearchat}
            >
              CLEAR CHAT
            </button>

            <button
              disabled={text.length === 0}
              className="btn btn-primary  mx-3 my-1"
              onClick={extraSpaces}
            >
              RemoveExtraSpaces
            </button>
          </div>
          <div className="preview container">
            <h2>PREVIEW</h2>
            <p>{text.length > 0 ? text : "NOTHING TO PREVIEW"}</p>
          </div>
        </div>
      </div>
      <div
        className="container my-2"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h2>YOUR SUMMARY</h2>
        <p>
          {
            text.split("/s/").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
      </div>
      <div
        className="time my-3 container"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <p>{time} MINTUES TO READ THE WORDS</p>
      </div>
    </>
  );
}
