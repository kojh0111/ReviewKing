import './rankContent.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Marginer from '../../components/marginer';
import MenuCategory from '../../const/menuCategory';

export default function RankContent() {
  return (
    <div className="RankContainer">
      <Marginer direction="vertical" margin="3em" />
      <h2 className="TitleText"> 업종별 순위 예시</h2>
      <Marginer direction="vertical" margin="3em" />

      <div className="choiceRankContainer">
        {MenuCategory.map(option => (
          <button type="button" className="menuCategory">
            {option}
          </button>
        ))}
      </div>

      <Marginer direction="vertical" margin="3em" />
      <div className="buttonContainer">
        <Link to="/rank/result/">
          <button type="button" className="button-next">
            순위 확인
          </button>
        </Link>
      </div>
      <Marginer direction="vertical" margin="3em" />
    </div>
  );
}
