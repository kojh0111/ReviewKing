import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
import { faGitlab} from "@fortawesome/free-brands-svg-icons";


const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  position: relative;
`;

const IntroduceText = styled.h1`
    font-size: 25px;
    font-weight: 500;
    line-height: 1.4;
    color: #fff;
    margin: 0;
    text-align: center;
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  &:hover {
    color: #adadad;
  }
`;

const Link = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 14px;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
`;

export function Footer(props) {
  return (
    <FooterContainer>
      <Marginer direction="vertical" margin="3em"/>
      <Logo small />
      <Marginer direction="vertical" margin="1em" />
      <IntroduceText>코로나 발생 전과 후,</IntroduceText>
      <IntroduceText>엘리스 본사 주변의 음식점 리뷰 변화를 분석합니다.</IntroduceText>
      <Marginer direction="vertical" margin="1em" />
      <Button>오늘 뭐먹지??</Button>
      <Marginer direction="vertical" margin="5em" />
      <AccessibilityContainer>
        <PrivacyContainer>
          <Link>서비스 소개 </Link>
          <Link>서비스 문의 </Link>
        </PrivacyContainer>
        <SocialIcon>
          <FontAwesomeIcon icon={faGitlab} />
        </SocialIcon>
      </AccessibilityContainer>
      <RightsReserved>&copy; 2021 ReviewKing All rights reserved</RightsReserved>
    </FooterContainer>
  );
}
