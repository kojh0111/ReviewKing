import './testResult.scss';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ReactElasticCarousel from 'react-elastic-carousel';
import Marginer from '../../components/marginer';

export default function TestResult() {
  const { subctr } = useParams();
  const [rankContent, setRankContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  const multikey = useSelector(state => state).keys;
  const url = multikey.map(a => `key=${a}&`).join('');
  const scrollToServiceSection = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
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
        <div className="notice">잠시만 기다려 주세요!</div>
      </div>
    );
  if (error) return <div className="notice-error">에러가 발생했습니다</div>;
  if (!rankContent) return null;

  return (
    <div className="CategoryContainer">
      <Marginer direction="vertical" margin="2rem" />
      <h1>다음과 같은 음식점을 추천합니다.</h1>
      <Marginer direction="vertical" margin="6rem" />

      <ReactElasticCarousel breakPoints={breakPoints}>
        {rankContent.map(option => (
          <Link
            to={`/reviews/${option.restaurant_id}`}
            className="testLink"
            onClick={scrollToServiceSection}
          >
            
            <div className="restaurantsResultChoice bg-cover" style={{ backgroundImage: `url(${option.img_url})`, opacity: 0.2 }}>
              <span>{option.name}</span>
              <h3>
                종합 평점 :&nbsp;
                <span style={{ color: '#2496ed' }}>
                  {option.integrated_rating}
                </span>
              </h3>
              <div className="testRatingContainer">
                {option.kakao ? <h3>카카오 : {option.kakao}</h3> : ''}
                {option.mango ? <h3>망고플레이트 : {option.mango}</h3> : ''}
                {option.naver ? <h3>네이버 : {option.naver}</h3> : ''}
                {option.siksin ? <h3>식신 : {option.siksin}</h3> : ''}
              </div>
            </div>
          </Link>
        ))}
      </ReactElasticCarousel>

      <Marginer direction="vertical" margin="5rem" />

      <div className="buttonContainer">
        <Link
          to={`/what-to-eat/category/${subctr}`}
          onClick={scrollToServiceSection}
        >
          <div className="button-prev">이전</div>
        </Link>
        <Marginer direction="horizontal" margin="3rem" />
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
      <Marginer direction="vertical" margin="2rem" />
    </div>
  );
}
