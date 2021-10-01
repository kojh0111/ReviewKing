import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { IntroducePage } from "../introducepage";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export function Homepage(props) {
    return (
        
    <PageContainer>
        <Helmet>
            <title>리뷰왕</title>
        </Helmet>

        <TopSection />
        <ServicesSection/>
        <Footer/>
    </PageContainer>
    );
}
