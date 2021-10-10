import './introduceContent.scss';
import React from 'react';
import Members from '../../const/member';

export default function IntroduceContent() {
  return (
    <div className="IntroduceContainer">

      <div className="ServiceIntroContainer">
        <h2 className="TitleText"> 서비스 소개</h2>

        <p className="Intro">
          플랫폼 별 맛집 평점이 많이 차이나는 경우도 있다는 사실, 알고 계셨나요?
        </p>
        <p className="Intro">
          우리는 어느 플랫폼을 믿어야 할까요?
        </p>
        <p className="Description">
          <span>리뷰를 비교해보며</span>
          <span>사용자에게 '어떤 플랫폼이 더 낫다'라고 알려주기보다는 플랫폼별로 비교를 할 수 있도록 합니다.</span>
          <span>사용자는 더 좋은 선택을</span>
          <span>이를 통해 합리적인 선택을 할 수 있게 될 것입니다.</span>
        </p>
      </div>
      <h2 className="TitleText">팀원 소개</h2>
      <div className="PeopleIntroContainer">
        {Members.map(option => (
          <div className="CardContainer">
            <img alt="" className="CardIcon" />
            <h2 className="PeopleText">{option.name}</h2>
            <h2 className="PeopleText">{option.role}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

// TODO. 이미지 구해서 슬슬 작성할 것!
