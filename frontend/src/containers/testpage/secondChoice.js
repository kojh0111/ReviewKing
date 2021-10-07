import './secondChoice.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Marginer from '../../components/marginer';
import MenuChoice from '../../const/menuChoice';

export default function SecondChoice() {
  return (
    <div className="CategoryContainer">
      <Marginer direction="vertical" margin="2em" />
      <h1>음식을 선택하세요</h1>
      <Marginer direction="vertical" margin="2em" />
      <div className="choiceContainer">
        {MenuChoice.map(option => (
          <button type="button" className="menuCategory">
            <img alt="" className="CategoryImage" /> {option}
          </button>
        ))}
      </div>

      <div className="buttonContainer">
        <Link to="/what-to-eat/category/">
          <button type="button" className="button-prev">
            이전
          </button>
        </Link>

        <Link to="/what-to-eat/category/second-choice/result/">
          <button type="button" className="button-next">
            완료
          </button>
        </Link>
      </div>
    </div>
  );
}
