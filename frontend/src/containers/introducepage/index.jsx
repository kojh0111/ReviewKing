
import React from "react";
import { Marginer } from "../../components/marginer";
import { IntroduceContent } from "./introduceContent";

import "./index.scss";




export function IntroducePage(props) {

    return (
    <div className="ServicePageContainer" name="servicePageContainer">

        <Marginer direction="vertical" margin="2em"/>

        <IntroduceContent/>
        
    </div>

    );
}