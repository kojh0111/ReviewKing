import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import TabMenuItem from "../../components/tabMenuitem/TabMenuItem";
import { TabComponent } from "../../components/tabs";
import tabTitle from "../../const/tabtitle";
import { IntroducePage } from "../introducepage";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
`;

const AllContainer = styled.div`

`;

export function ServicesSection(props) {
  return (

    <AllContainer>

      <ServicesContainer name="servicesSection">
            
        <IntroducePage/>
            
      </ServicesContainer>

    </AllContainer>
    
    
  );
}
