import './testResult.scss';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { scroller } from 'react-scroll';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Marginer from '../../components/marginer';

export default function TestResult() {
  const { subctr } = useParams();
  const [rankContent, setRankContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const multikey = useSelector(state => state).keys;
  const url = multikey.map(a => `key=${a}&`).join('');
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
      .get(`http://3.139.100.234:5000/what-to-eat/${subctr}/?${url}}`)
      .then(response => {
        setRankContent(response.data.result);
      })
      .catch(e => {
        setError(e);
      });
    setLoading(false);
    return CategoryResponse;
  };

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
      <Marginer direction="vertical" margin="6rem" />
      <div className="choiceContainer">
        {rankContent.map(option => (
          <button type="button" className="restaurantsChoice">
            <h1 style={{ color: '#ff5722' }}>{option.name}</h1>
            <h2>순위. {option.rank}</h2>
            <h3>종합평점: {option.integrated_rating}</h3>
            <div className="cardBottom">
              <h3>카카오: {option.kakao}</h3>
              <h3>망고플레이트: {option.mango}</h3>
              <h3>네이버: {option.naver}</h3>
              <h3>식신: {option.siksin}</h3>
            </div>
          </button>
        ))}
      </div>

      <Marginer direction="vertical" margin="5rem" />

      <div className="buttonContainer">
        <Link to={`/what-to-eat/category/${subctr}`}>
          <button type="button" className="button-prev">
            이전
          </button>
        </Link>

        <Link to="/reviews">
          <button
            type="button"
            className="button-next"
            onClick={scrollToServiceSection}
          >
            음식점 리뷰
          </button>
        </Link>
      </div>
    </div>
  );
}
