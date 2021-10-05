import './categoryChoice.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Marginer from '../../components/marginer';
import TastesCategory from '../../const/tastesCategory';

export default function CategoryChoice() {
  return (
    <div className="CategoryContainer">
      <Marginer direction="vertical" margin="2em" />
      <h1>카테고리를 선택하세요</h1>
      <Marginer direction="vertical" margin="2em" />
      <div className="choiceContainer">
        {TastesCategory.map(option => (
          <button type="button" className="menuCategory">
            <img alt="" className="CategoryImage" /> {option}
          </button>
        ))}
      </div>

      <div className="buttonContainer">
        <Link to="/what-to-eat/">
          <button type="button" className="button-prev">
            이전
          </button>
        </Link>

        <Link to="/">
          <button type="button" className="button-next">
            다음
          </button>
        </Link>
      </div>
    </div>
  );
}
