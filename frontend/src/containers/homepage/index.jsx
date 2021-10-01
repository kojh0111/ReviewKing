import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";
import "./index.scss";

import tabTitle from "../../const/tabtitle";
import TabMenuItem from "../../components/tabMenuitem/TabMenuItem";

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const tabContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export function Homepage(props) {
    return (
        
    <PageContainer>
        
        <Helmet>
            <title>리뷰왕</title>
        </Helmet>

        <TopSection />
        
        <div className="tabContainer">
            {tabTitle.map((item, index) => {
                return <TabMenuItem key={index} title={item.title} path={item.path} />;
            })}
        </div>

        <Marginer direction="vertical" margin="2em"/>

        <ServicesSection/>
        
        <Footer/>
    </PageContainer>
    );
}
