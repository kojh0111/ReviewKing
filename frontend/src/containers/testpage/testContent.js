import "./testContent.scss";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";




export function TestContent(props) {

    return (

        <div className="TestContainer">

            <Marginer direction="vertical" margin="1em" />
                <h2 className="TitleText"> 오늘 뭐먹지? 예시</h2>
            <Marginer direction="vertical" margin="1em" />
    
            <h3 className="bodyText">
                테스트 페이지는 테스트 내용을 바탕으로 사용자에게 음식을 추천해주는 페이지입니다.<br/>
                <br/>
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 <br/>
                <br/>
            </h3>

        </div>
            
    );
}