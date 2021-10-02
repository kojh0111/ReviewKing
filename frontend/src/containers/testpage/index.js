import "./index.scss";
import React from "react";
import { Marginer } from "../../components/marginer";
import { TestContent } from "./testContent";




export function TestPage(props) {

    return (

        <div className="ServicePageContainer" name="servicePageContainer">

            <Marginer direction="vertical" margin="2em"/>

            <TestContent/>
        
        </div>

    );
}
