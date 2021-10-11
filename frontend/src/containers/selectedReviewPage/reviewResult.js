/* eslint-disable jsx-a11y/alt-text */
import './reviewResult.scss';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Marginer from '../../components/marginer';
import Map from '../../components/map/map';
import WordCloudTabs from '../../components/wordcloudTab/Tabs';

export default function ReviewResult() {
  const [reviewResult, setReviewResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  // API로 부터 선릉역 주변 식당 정보 받아옴 (category, img, lat, lng, name)

  const GetSelectedInfoAPI = async () => {
    // 요청이 시작 할 때 초기화
    setError(null);
    setReviewResult(null);
    setLoading(true);
    const SelectedResponse = await axios
      .get(`http://3.139.100.234:5000/reviews/${id}`)
      .then(response => {
        setReviewResult(response.data.data);
      })
      .catch(e => {
        setError(e);
      });
    setLoading(false);
    return SelectedResponse;
  };

  useEffect(() => {
    GetSelectedInfoAPI();
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
  if (!reviewResult) return null;

  console.log(reviewResult);

  return (
    <div className="ReviewContainer">
      <Marginer direction="vertical" margin="3rem" />
      <h2 className="TitleText"> 음식점 리뷰 결과 </h2>

      <Marginer direction="vertical" margin="1rem" />

      <div className="ReviewIntroContainer">
        <Marginer direction="vertical" margin="2rem" />
        <div className="NameContainer">
          <div className="RestaurantsEmoji" />
          <h2 className="SelectedText" style={{ color: '#ff5722' }}>
            {reviewResult.name}
          </h2>
        </div>
        <Marginer direction="vertical" margin="3rem" />

        <div className="buttonContainer">
          <Link to="/reviews">
            <button type="button" className="button-prev">
              다른 음식점 검색하기
            </button>
          </Link>
        </div>
        <Marginer direction="vertical" margin="2rem" />

        <WordCloudTabs data={reviewResult} />

        <Marginer direction="vertical" margin="2rem" />
        <h3 className="bodyText">
          리뷰왕은 검색하신 음식점의 대한 정보를 크롤링하여 사용자에게
          워드클라우드 형태로 제공합니다.
        </h3>

        <Marginer direction="vertical" margin="2rem" />
        <Map data={[reviewResult]} />
        <Marginer direction="vertical" margin="1rem" />

        <h3 className="bodyText">
          지도 혹은 음식점 리스트가 나오면 사용자가 선택하는 공간 (사용자와
          상호작용)
        </h3>
        <Marginer direction="vertical" margin="6rem" />
      </div>
    </div>
  );
}

// TODO. 로컬에서 MAP 정상작동 하였으나, 현재 오류가 있어 주석처리 => 해결해야함
