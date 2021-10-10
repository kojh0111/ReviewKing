import './rankResult.scss';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Marginer from '../../components/marginer';

export default function RankResult() {
  const [rankResult, setRankResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { category } = useParams();

  // API로 부터 상위 3개 식당 정보 받아옴 (이미지 url, 평점, 메뉴, 이름, 순위) => key: category_id
  const GetTopThreeAPI = async () => {
    // 요청이 시작 할 때 초기화
    setError(null);
    setRankResult(null);
    setLoading(true);
    const TopThreeResponse = await axios
      .get(`http://3.139.100.234:5000/ranks/${category}`)
      .then(response => {
        setRankResult(response.data.data);
      })
      .catch(e => {
        setError(e);
      });
    setLoading(false);
    return TopThreeResponse;
  };

  useEffect(() => {
    GetTopThreeAPI();
  }, []);

  if (loading)
    return (
      <div className="notice-container">
        <div className="loader" />
        <Marginer direction="vertical" margin="2rem" />
        <div className="notice">로딩중....</div>
      </div>
    );
  if (error) return <div className="notice-error ">에러가 발생했습니다</div>;
  if (!rankResult) return null;

  return (
    <div className="ResultContainer">
      <Marginer direction="vertical" margin="2rem" />
      <h1 style={{ display: 'flex' }}>
        <div style={{ color: '#ff5722' }}>{category}</div>을(를) 선택하셨습니다.
      </h1>
      <Marginer direction="vertical" margin="1rem" />
      <h1>다음과 같은 음식점을 추천합니다.</h1>
      <Marginer direction="vertical" margin="4rem" />

      <div className="RankResultContainer">
        {rankResult.map(option => (
          <button type="button" className="restaurantsChoice">
            <Marginer direction="vertical" margin="1rem" />
            <h1 style={{ color: '#ff5722' }}>{option.name}</h1>
            <Marginer direction="vertical" margin="1rem" />
            <h3>순위 {option.rank}</h3>
            <Marginer direction="vertical" margin="1rem" />
            <div className="ratingContainer">
              <h3>종합 평점 :&nbsp;</h3>
              <h3 style={{ color: '#ff5722' }}>{option.integrated_rating}</h3>
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

// TODO. useParams이 아닌카테고리 이름을 받아와야 함... => 000을(를) 선택하셨습니다.
// <img /> 대신에 map 컴포넌트 삽입해야함. 상위 3개 음식점 위치 삽입해야 함. => data는 rankResult이용
