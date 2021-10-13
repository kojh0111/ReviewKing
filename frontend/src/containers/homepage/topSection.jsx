import React from 'react';
import './topSection.scss';

import Button from '../../components/button';
import DownArrow from '../../components/downArrow';
import Logo from '../../components/logo';
import Navbar from '../../components/navbar';

export default function TopSection() {
  const scrollToServiceSection = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div name="topSection">
      <div className="TopContainer">
        <div className="Background">
          <Navbar />

          <div className="CenterContainer">
            <Logo />
            <div className="IntroduceText">선릉역 주변 음식점의</div>
            <div className="IntroduceText">플랫폼별 리뷰를 분석합니다</div>
            <Button onClick={scrollToServiceSection}>리뷰 비교하기</Button>
          </div>

          <div className="DownArrowContainer" onClick={scrollToServiceSection}>
            <DownArrow />
          </div>
        </div>
      </div>
    </div>
  );
}
