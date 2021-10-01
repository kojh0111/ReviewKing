import React from "react";

import styled, { css } from "styled-components";
import { Marginer } from "../../components/marginer";

import { DropDown } from "../../components/dropdown";


const ReviewContainer = styled.div`
    width: 100%;
    min-height: 1400px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 10px 0;
    flex-direction: column;
`;


const ReviewIntroContainer = styled.div`
    width: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`;

const ReviewText = styled.h2`
    font-size: 1em;
    font-weight: 500;
    line-height: 1.4;
    margin-right: 1em;
    margin-left: 1em;
    text-align: center;
`;

const IntroduceText = styled.h2`
    font-size: 1.8em;
    font-weight: 500;
    line-height: 1.4;
    margin: 0;
    text-align: center;
`;

const MapImage = styled.img`
    width: 85%;
    height: 25em;
    background-color: #ABF200;

`;


export function ReviewPage(props) {

    return (
    <ReviewContainer>

            <Marginer direction="vertical" margin="1em" />
            <IntroduceText> 음식점 리뷰 예시</IntroduceText>
            <Marginer direction="vertical" margin="1em" />

        <ReviewIntroContainer>

            <ReviewText>
                음식점 리뷰 페이지는 사용자가 선택한 음식점의 리뷰 변화를 한 눈에 볼 수 있는 페이지입니다. (설명이 들어갈 공간)
            </ReviewText>

            <Marginer direction="vertical" margin="2em" />
            <DropDown/>

            <Marginer direction="vertical" margin="3em" />
            <MapImage/>
            <Marginer direction="vertical" margin="1em" />

            <ReviewText>
                지도 혹은 음식점 리스트가 나오면 사용자가 선택하는 공간 (사용자와 상호작용)
            </ReviewText>

            <Marginer direction="vertical" margin="3em" />
            <ReviewText>
                분석한 인사이트가 출력되는 공간<br/>
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                
            </ReviewText>
            <Marginer direction="vertical" margin="6em" />
            
        </ReviewIntroContainer>

    </ReviewContainer>
    
    );
}