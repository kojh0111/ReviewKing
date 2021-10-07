import './rankResult.scss';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Marginer from '../../components/marginer';
import Recommend from '../../const/recomend';

export default function RankResult() {
  const { category } = useParams();
  console.log(category);

  return (
    <div className="ResultContainer">
      <Marginer direction="vertical" margin="2rem" />
      <h1 style={{ display: 'flex' }}>
        <div style={{ color: '$main_orange' }}>{category}</div>을(를)
        선택하셨습니다.
      </h1>
      <Marginer direction="vertical" margin="1rem" />
      <h1>다음과 같은 음식점을 추천합니다.</h1>
      <Marginer direction="vertical" margin="4rem" />

      <div className="RankResultContainer">
        {Recommend.map(option => (
          <button type="button" className="restaurantsChoice">
            <Marginer direction="vertical" margin="1rem" />
            <h1 style={{ color: '$main_orange' }}>{option.name}</h1>
            <Marginer direction="vertical" margin="1rem" />
            <h3>{option.address}</h3>
            <Marginer direction="vertical" margin="1rem" />
            <h3>추천 메뉴 1. {option.menu1}</h3>
            <h3>추천 메뉴 2. {option.menu2}</h3>
            <h3>추천 메뉴 3. {option.menu3}</h3>
            <Marginer direction="vertical" margin="1rem" />
            <div className="ratingContainer">
              <h3>종합 평점 :&nbsp;</h3>
              <h3 style={{ color: '$main_orange' }}>{option.rating}</h3>
            </div>
            <Marginer direction="vertical" margin="1rem" />
          </button>
        ))}
      </div>
      <Marginer direction="vertical" margin="1rem" />

      <Marginer direction="vertical" margin="4rem" />
      <img alt="" className="ResultImage" />

      <div className="buttonContainer">
        <Marginer direction="vertical" margin="2rem" />
        <Link to="/rank/">
          <button type="button" className="button-prev">
            이전
          </button>
        </Link>

        <Link to="/">
          <button type="button" className="button-next">
            홈으로
          </button>
        </Link>
      </div>
      <Marginer direction="vertical" margin="3rem" />
    </div>
  );
}
