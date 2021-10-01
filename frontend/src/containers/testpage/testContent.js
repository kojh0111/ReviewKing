import "./testContent.scss";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";

const TestContainer = styled.div`
    width: 100%;
    min-height: 1400px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 10px 0;
    flex-direction: column;
`;

const PeopleText = styled.h2`
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

export function TestContent(props) {

    return (

        <TestContainer>

            <Marginer direction="vertical" margin="1em" />
            <IntroduceText> 오늘 뭐먹지? 예시</IntroduceText>
            <Marginer direction="vertical" margin="1em" />
    
            <PeopleText>
                테스트 페이지는 테스트 내용을 바탕으로 사용자에게 음식을 추천해주는 페이지입니다.<br/>
                <br/>
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                <br/>
            </PeopleText>

        </TestContainer>
            
            
    );
}