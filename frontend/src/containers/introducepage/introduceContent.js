import "./introduceContent.scss";
import React from "react";
import { Marginer } from "../../components/marginer";




export function IntroduceContent(props) {

    return (
    
    <div className="IntroduceContainer">
        
        <Marginer direction="vertical" margin="1em" />
        <h2 className="TitleText"> 팀원 소개 예시</h2>
        <Marginer direction="vertical" margin="1em" />

        <div className="PeopleIntroContainer" >
                
                <div className="CardContainer">
                    <img className="CardIcon"/>
                    <h2 className="PeopleText">고정현</h2>
                    <h2 className="PeopleText">팀장님</h2>
                </div>

                <div className="CardContainer">
                    <img className="CardIcon"/>
                    <h2 className="PeopleText">김지훈</h2>
                    <h2 className="PeopleText">백엔드</h2>
                </div>

                <div className="CardContainer">
                    <img className="CardIcon"/>
                    <h2 className="PeopleText">최유림</h2>
                    <h2 className="PeopleText">프론트엔드</h2>
                </div>

                <div className="CardContainer">
                <img className="CardIcon"/>
                    <h2 className="PeopleText">김진경</h2>
                    <h2 className="PeopleText">프론트엔드</h2>
                </div>

                <div className="CardContainer">
                    <img className="CardIcon"/>
                    <h2 className="PeopleText">문성권</h2>
                    <h2 className="PeopleText">백엔드</h2>
                </div>

        </div>

        <div className="ServiceIntroContainer">
            <Marginer direction="vertical" margin="4em" />
                <h2 className="TitleText"> 서비스 소개 예시</h2>
            <Marginer direction="vertical" margin="2em" />

            <h3 className="bodyText">
                소개 페이지는 리뷰왕 프로젝트를 함께하는 동료들을 소개하고 프로젝트의 시작 배경과 목표를 설명하는 페이지입니다.<br/>
                <br/>
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                <br/>
            </h3>

            <img className="IntroduceImage"/>

            <Marginer direction="vertical" margin="1em" />

            <h2 className="bodyText"> 서비스 사진 예시 입니다.</h2>

            <Marginer direction="vertical" margin="1em" />

            <h3 className="bodyText">
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                <br/>


            </h3>

        </div>

    </div>

    );
}