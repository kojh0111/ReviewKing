import React from 'react';
import './topSection.scss';
import { Element, scroller } from 'react-scroll';

import { Button } from '../../components/button';
import { DownArrow } from '../../components/downArrow';
import Logo from '../../components/logo';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';

export function TopSection(props) {
  const scrollToServiceSection = () => {
    // TODO.
    scroller.scrollTo('ServicePageContainer', { smooth: true, duration: 1500 });
  };

  return (
    <Element name="topSection">
      <div className="TopContainer">
        <div className="Background">
          <Navbar />
          <Marginer direction="vertical" margin="8em" />
          <Logo />

          <Marginer direction="vertical" margin="4em" />
          <div className="IntroduceText">코로나 발생 전과 후,</div>
          <div className="IntroduceText">
            엘리스 본사 주변의 음식점 리뷰 변화를 분석합니다.
          </div>
          <Marginer direction="vertical" margin="2em" />

          <Button>오늘 뭐먹지??</Button>

          <div className="DownArrowContainer" onClick={scrollToServiceSection}>
            <DownArrow />
          </div>
        </div>
      </div>
    </Element>
  );
}
