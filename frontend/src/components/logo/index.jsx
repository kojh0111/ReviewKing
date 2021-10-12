import React from 'react';
// import BeemaLogo from '../../assets/logo/logo_croped.png';
import KingLogo from '../../assets/logo/reviewking.png';
import './index.scss';

export default function Logo() {
  return (
    <div className="LogoContainer">
      <img src={KingLogo} alt="logo" />
      <div className="LogoText">리뷰왕</div>
    </div>
  );
}
