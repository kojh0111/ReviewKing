import './secondChoice.scss';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Marginer from '../../components/marginer';
import MenuChoice from '../../const/menuChoice';

export default function SecondChoice() {
  const { tastes } = useParams();
  console.log(tastes);

  return (
    <div className="CategoryContainer">
      <Marginer direction="vertical" margin="2rem" />
      <h1>{tastes} 음식을 선택하세요</h1>
      <Marginer direction="vertical" margin="2rem" />
      <div className="choiceContainer">
        {MenuChoice.map(menus => (
          <Link to={`/what-to-eat/category/${tastes}/${menus}`}>
            <button type="button" className="menuCategory">
              <img alt="" className="CategoryImage" /> {menus}
            </button>
          </Link>
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
