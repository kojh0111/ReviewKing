import './testResult.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Marginer from '../../components/marginer';
import Recommend from '../../const/recomend';
import ReviewSites from '../../const/reviewSites';
import Accordion from '../../components/accordion/accordion';

export default function TestResult() {
  return (
    <div className="CategoryContainer">
      <Marginer direction="vertical" margin="2em" />
      <h1>000을 드시고 싶은 당신에게 </h1>
      <Marginer direction="vertical" margin="1em" />
      <h1>다음과 같은 음식점을 추천합니다.</h1>
      <Marginer direction="vertical" margin="4em" />
      <div className="choiceContainer">
        {Recommend.map(option => (
          <button type="button" className="restaurantsChoice">
            <h1>{option.name}</h1>
            <h3>{option.address}</h3>
          </button>
        ))}
      </div>

      <Marginer direction="vertical" margin="5em" />

      <div className="RatingContainer">
        {ReviewSites.map(option => (
          <div className="reviewSite">
            <h1>{option.name}</h1>
            <Marginer direction="vertical" margin="1em" />
            <h2>{option.rating}</h2>
            <Marginer direction="vertical" margin="2em" />
          </div>
        ))}
      </div>

      <Marginer direction="vertical" margin="3em" />
      <Accordion />
      <Marginer direction="vertical" margin="3em" />

      <div className="buttonContainer">
        <Link to="/what-to-eat/category/second-choice/">
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
    </div>
  );
}
