import React from 'react';
import './topSection.scss';

import Button from '../../components/button';
import DownArrow from '../../components/downArrow';
import Logo from '../../components/logo';
import Navbar from '../../components/navbar';

export default function TopSection() {
  const scrollToServiceSection = () => {
    window.scrollTo({ top: document.documentElement.clientHeight, behavior: 'smooth' });
  };

  return (
    <div name="topSection">
      <div className="TopContainer">
        <div className="Background">
          <Navbar />

          <div className="CenterContainer">
            <Logo />
            <div className="IntroduceText">엘리스 교육장 주변의 음식점</div>
            <div className="IntroduceText">플랫폼별 리뷰를 분석합니다</div>
            <Button onClick={scrollToServiceSection}>오늘 뭐먹지?</Button>
          </div>

          <div className="DownArrowContainer" onClick={scrollToServiceSection}>
            <DownArrow />
          </div>
        </div>
      </div>
    </div>
  );
}
