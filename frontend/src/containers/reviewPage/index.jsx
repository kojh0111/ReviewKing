import "./index.scss";
import React from "react";
import { Marginer } from "../../components/marginer";
import { ReviewContent } from "./reviewContent";




export function ReviewPage(props) {

    return (
        <div className="ServicePageContainer" name="servicePageContainer">
            
        <Marginer direction="vertical" margin="2em"/>

        <ReviewContent/>
        

        </div>
    
    );
}