
import React from "react";

import styled, { css } from "styled-components";
import { Marginer } from "../../components/marginer";


import { useMediaQuery } from "react-responsive";

const IntroduceContainer = styled.div`
    width: 100%;
    min-height: 1400px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 10px 0;
    flex-direction: column;
`;

const PeopleIntroContainer = styled.div`
    width: 100%;
    min-height: 350px;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;

const ServiceIntroContainer = styled.div`
    width: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`;

const CardContainer = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

const CardIcon = styled.img`
    width: 8em;
    height: 8em;
    background-color: #A566FF;

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

const IntroduceImage = styled.img`
    width: 15em;
    height: 15em;
    background-color: #FFBB00;

`;


export function IntroducePage(props) {

    const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

    return (
    <IntroduceContainer>
        <IntroduceText> 팀원 소개 예시</IntroduceText>

        <PeopleIntroContainer >
                
                <CardContainer>
                    <CardIcon></CardIcon>
                    <PeopleText>고정현</PeopleText>
                    <PeopleText>팀장님</PeopleText>
                </CardContainer>

                <CardContainer>
                    <CardIcon></CardIcon>
                    <PeopleText>김지훈</PeopleText>
                    <PeopleText>백엔드</PeopleText>
                </CardContainer>

                <CardContainer>
                    <CardIcon></CardIcon>
                    <PeopleText>최유림</PeopleText>
                    <PeopleText>프론트엔드</PeopleText>
                </CardContainer>

                <CardContainer>
                    <CardIcon></CardIcon>
                    <PeopleText>김진경</PeopleText>
                    <PeopleText>프론트엔드</PeopleText>
                </CardContainer>

                <CardContainer>
                    <CardIcon></CardIcon>
                    <PeopleText>문성권</PeopleText>
                    <PeopleText>백엔드</PeopleText>
                </CardContainer>

        </PeopleIntroContainer>

        <ServiceIntroContainer>
        <Marginer direction="vertical" margin="6em" />
            <IntroduceText> 서비스 소개 예시</IntroduceText>
            <Marginer direction="vertical" margin="1em" />
            <PeopleText>
                소개 페이지는 리뷰왕 프로젝트를 함께하는 동료들을 소개하고 프로젝트의 시작 배경과 목표를 설명하는 페이지입니다.<br/>
                <br/>
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                <br/>
            </PeopleText>
            <IntroduceImage/>
            <PeopleText>서비스 사진 예시 입니다.</PeopleText>
            <Marginer direction="vertical" margin="1em" />
            <PeopleText>
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                <br/>


            </PeopleText>

        </ServiceIntroContainer>

    </IntroduceContainer>
    
    );
}