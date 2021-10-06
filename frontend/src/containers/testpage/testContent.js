import './testContent.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Marginer from '../../components/marginer';

export default function TestContent() {
  return (
    <div className="TestContainer">
      <Marginer direction="vertical" margin="3em" />
      <h2 className="TitleText"> 오늘 뭐먹지? 예시</h2>
      <Marginer direction="vertical" margin="2em" />

      <h3 className="bodyText">
        테스트 페이지는 테스트 내용을 바탕으로 사용자에게 음식을 추천해주는
        페이지입니다.
      </h3>

      <Marginer direction="vertical" margin="2em" />
      <img alt="" className="TestInfoImage" />
      <Marginer direction="vertical" margin="2em" />

      <Link to="/what-to-eat/category/">
        <button type="button" className="button-start">
          테스트 시작
        </button>
      </Link>
      <Marginer direction="vertical" margin="2em" />
    </div>
  );
}
