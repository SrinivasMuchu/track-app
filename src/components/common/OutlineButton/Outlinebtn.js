import React from "react";
import "./OutlineBtn.css";

function OutlinedButton({ text, onClick }) {
  return (
    <div className="outline-button-wrapper" onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}

export default OutlinedButton;