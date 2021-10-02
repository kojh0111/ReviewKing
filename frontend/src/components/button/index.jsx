import React from "react";
import "./index.scss";

export function Button(props) {
  return(
    <button className="ButtonWrapper" {...props}>
      {props.children}
    </button>
  );
}
