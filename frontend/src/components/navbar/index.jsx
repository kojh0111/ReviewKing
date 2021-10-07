import React from 'react';
import { scroller } from 'react-scroll';
import BeemaLogo from '../../assets/logo/logo_croped.png';
import Button from '../button';
import Marginer from '../marginer';
import './index.scss';

export default function Navbar() {
  const scrollToServiceSection = () => {
    scroller.scrollTo('ServicePageContainer', { smooth: true, duration: 1500 });
  };

  return (
    <div className="NavbarContainer">
      <div className="BrandContainer">
        <img src={BeemaLogo} alt="logo" />
        <span>리뷰왕</span>
      </div>

      <div className="AccessibilityContainer">
        <Button
          style={{ fontSize: '0.8rem', padding: '5px 8px' }}
          onClick={scrollToServiceSection}
        >
          오늘 뭐먹지?
        </Button>
        <Marginer direction="horizontal" margin="8px" />
        <button type="button" className="LoginButton">
          로그인 (보류)
        </button>
      </div>
    </div>
  );
}
