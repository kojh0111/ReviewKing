import "./error.scss";
import React from "react";
import { Marginer } from "../../components/marginer";
import errorpageImage from "../../assets/pictures/pagenotfound.jpg"
import { Link } from "react-router-dom";

export function Error(props) {

    return (

        <div className="ErrorContainer">

            <Marginer direction="vertical" margin="5em" />
            <div className="errorText">404</div>

            <Marginer direction="vertical" margin="1em" />
            <div className="errorText">페이지를 찾을 수 없습니다.</div>

            <img src={errorpageImage } className="errorImage" alt="not found"/>
            <Marginer direction="vertical" margin="5em" />
        
            <Link className="button-home" to="/">
                <button>홈으로</button>
            </Link>
        </div>

    );
}