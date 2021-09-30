import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";

import BackgroundImg from "../../assets/pictures/background.jpg";
import { Button } from "../../components/button";
import { DownArrow } from "../../components/downArrow";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";


const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    position: relative;
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.89);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const IntroduceText = styled.h1`
    font-size: 2.2em;
    font-weight: 500;
    line-height: 1.4;
    color: #fff;
    margin: 0;
    text-align: center;
`;

const DownArrowContainer = styled.div`
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
`;

export function TopSection(props) {
    
    return (
        <Element name="topSection">
            <TopContainer>
                <BackgroundFilter>
                    <Navbar/>
                    <Marginer direction="vertical" margin="8em" />
                    <Logo />
                    <Marginer direction="vertical" margin="4em" />
                    <IntroduceText>코로나 발생 전과 후,</IntroduceText>
                    <IntroduceText>엘리스 본사 주변의 음식점 리뷰 변화를 분석합니다.</IntroduceText>
                    <Marginer direction="vertical" margin="2em" />
                    <Button>오늘 뭐먹지??</Button>
                    <DownArrowContainer>
                        <DownArrow />
                    </DownArrowContainer>
                </BackgroundFilter>
            </TopContainer>
        </Element>
    )

}
