import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../button';
import Logo from '../logo';
import { Marginer } from '../marginer';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

export function Footer() {
  return (
    <div className="FooterContainer">
      <Marginer direction="vertical" margin="3em" />
      <Logo />
      <Marginer direction="vertical" margin="1em" />
      <h1 className="IntroduceText">코로나 발생 전과 후,</h1>
      <h1 className="IntroduceText">
        엘리스 본사 주변의 음식점 리뷰 변화를 분석합니다.
      </h1>
      <Marginer direction="vertical" margin="1em" />
      <Button>오늘 뭐먹지??</Button>
      <Marginer direction="vertical" margin="5em" />

      <div className="GuideContainer">
        <div className="PrivacyContainer">
          <a className="Link">서비스 소개 </a>

          <Marginer direction="horizontal" margin="2em" />

          <a className="Link">서비스 문의 </a>
        </div>
        <div className="SocialIcon">
          <FontAwesomeIcon icon={faGitlab} />
        </div>
      </div>

      <div className="RightsReserved">
        &copy; 2021 ReviewKing All rights reserved
      </div>
    </div>
  );
}
