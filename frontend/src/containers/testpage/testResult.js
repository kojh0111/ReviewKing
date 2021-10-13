import './testResult.scss';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { scroller } from 'react-scroll';
import axios from 'axios';
import Marginer from '../../components/marginer';
import Recommend from '../../const/recomend';
import ReviewSites from '../../const/reviewSites';
import Accordion from '../../components/accordion/accordion';

export default function TestResult() {
  const { subctr } = useParams();
  const { keyword } = useParams();
  const [rankContent, setRankContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const scrollToServiceSection = () => {
    scroller.scrollTo('ServicePageContainer', { smooth: true, duration: 1500 });
  };

  // API로 부터 카테고리 정보 & 이미지를 받아옴(id: 36~70)
  const GetRecomandAPI = async () => {
    // 요청이 시작 할 때 초기화
    setError(null);
    setRankContent(null);
    setLoading(true);
    const CategoryResponse = await axios
      .get(`http://3.139.100.234:5000/what-to-eat/${subctr}/key=${keyword}`)
      .then(response => {
        setRankContent(response.data.categories);
      })
      .catch(e => {
        setError(e);
      });
    setLoading(false);
    return CategoryResponse;
  };

  console.log('subctr', subctr);
  console.log('keyword', keyword);

  useEffect(() => {
    GetRecomandAPI();
  }, []);

  if (loading)
    return (
      <div className="notice-container">
        <div className="loader" />
        <Marginer direction="vertical" margin="2rem" />
        <div className="notice">로딩중....</div>
      </div>
    );
  if (error) return <div className="notice-error">에러가 발생했습니다</div>;
  if (!rankContent) return null;

  return (
    <div className="CategoryContainer">
      <Marginer direction="vertical" margin="2rem" />
      <h1>다음과 같은 음식점을 추천합니다.</h1>
      <Marginer direction="vertical" margin="4rem" />
      <div className="choiceContainer">
        {Recommend.map(option => (
          <button type="button" className="restaurantsChoice">
            <h1>{option.name}</h1>
            <h3>{option.address}</h3>
          </button>
        ))}
      </div>

      <Marginer direction="vertical" margin="5rem" />

      <div className="RatingContainer">
        {ReviewSites.map(option => (
          <div className="reviewSite">
            <h1>{option.name}</h1>
            <Marginer direction="vertical" margin="1rem" />
            <h2>{option.rating}</h2>
            <Marginer direction="vertical" margin="2rem" />
          </div>
        ))}
      </div>

      <Marginer direction="vertical" margin="3rem" />
      <Accordion />
      <Marginer direction="vertical" margin="3rem" />

      <div className="buttonContainer">
        <Link to={`/what-to-eat/category/${subctr}`}>
          <button type="button" className="button-prev">
            이전
          </button>
        </Link>

        <Link to="/">
          <button
            type="button"
            className="button-next"
            onClick={scrollToServiceSection}
          >
            홈으로
          </button>
        </Link>
      </div>
    </div>
  );
}
