
import React from "react";

import styled, { css } from "styled-components";
import { Helmet } from "react-helmet";
import { TopSection } from "../homepage/topSection";
import { Marginer } from "../../components/marginer";
import tabTitle from "../../const/tabtitle";
import TabMenuItem from "../../components/tabMenuitem/TabMenuItem";
import { Footer } from "../../components/footer";
import { IntroduceContent } from "./introduceContent";


const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;


export function IntroducePage(props) {

    return (
    <PageContainer>

        <Helmet>
            <title>리뷰왕</title>
        </Helmet>

        <TopSection/>
        
        <div className="tabContainer">
            {tabTitle.map((item, index) => {
                return <TabMenuItem key={index} title={item.title} path={item.path} />;
            })}
        </div>

        <Marginer direction="vertical" margin="2em"/>

        <IntroduceContent/>
        
        <Footer/>
    </PageContainer>

    );
}