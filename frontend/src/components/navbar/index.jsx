import React from "react";
import BeemaLogo from "../../assets/logo/logo_croped.png";
import { Button } from "../button";
import { Marginer } from "../marginer";
import "./index.scss";




export function Navbar(props) {
  return (
    <div className="NavbarContainer">

      <div className="BrandContainer">
        <img src={BeemaLogo} />
        <span>리뷰왕</span>
      </div>

      <div className="AccessibilityContainer">
        <Button style={{ fontSize: "0.8em", padding: "5px 8px" }}>오늘 뭐먹지?</Button>
        <Marginer direction="horizontal" margin="8px" />
        <button className="LoginButton">로그인 (보류)</button>
      </div>

    </div>
  );
}
