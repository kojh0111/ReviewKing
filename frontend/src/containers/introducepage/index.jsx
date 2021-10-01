
import React from "react";

import styled, { css } from "styled-components";
import { Marginer } from "../../components/marginer";
import { IntroduceContent } from "./introduceContent";

import "./index.scss";




export function IntroducePage(props) {

    return (
    <div className="PageContainer">

        <Marginer direction="vertical" margin="2em"/>

        <IntroduceContent/>
        
    </div>

    );
}