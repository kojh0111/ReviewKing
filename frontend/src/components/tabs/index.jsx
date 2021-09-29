import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { IntroducePage } from "../../containers/introducepage";

export function TabComponent(props) {

    const [index, setIndex] = useState(0);

    let style = {
        width:"100%"
    }

    let Liststyle = {
        width:"1000px"
    }
        
    let Panelstyle = {
        width:"100%",
        minHeight: "1000px",
        background:"#E8D9FF"
    }

    let Tabstyle = {
        width:"25%",
        textAlign: "center"
    }

    return (
    <div>
        <Tabs style={style} selectedIndex={index} onSelect={index => setIndex(index)}>
            <TabList style={Liststyle}>
                <Tab style={Tabstyle}>
                    <span>소개 페이지</span>
                </Tab>
                <Tab style={Tabstyle}>
                    <span>음식점 리뷰</span>
                </Tab>
                <Tab style={Tabstyle}>
                    <span>업종별 순위</span>
                </Tab>
                <Tab style={Tabstyle}>
                    <span>오늘 뭐먹지?</span>
                </Tab>
            </TabList>

            <div>인덱스 번호 {index}</div>
            <TabPanel style={Panelstyle}>
                <IntroducePage/>
            </TabPanel>
            <TabPanel style={Panelstyle}>
                <div>음식점 리뷰 공간</div>
            </TabPanel>
            <TabPanel style={Panelstyle}>
                <div>업종별 순위 공간</div>
            </TabPanel>
            <TabPanel style={Panelstyle}>
                <div>오늘 뭐먹지? 공간</div>
            </TabPanel>
        </Tabs>
    </div>
    );
}

