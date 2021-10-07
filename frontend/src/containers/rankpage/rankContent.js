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
      <Marginer direction="vertical" margin="4em" />

      <div className="choiceRankContainer">
        {MenuCategory.map(category => (
          <Link to={`/rank/result/${category}`}>
            <button type="button" className="menuCategory">
              {category}
            </button>
          </Link>
        ))}
      </div>

      <Marginer direction="vertical" margin="8em" />
    </div>
  );
}
