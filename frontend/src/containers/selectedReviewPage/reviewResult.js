/* eslint-disable jsx-a11y/alt-text */
import './reviewResult.scss';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Marginer from '../../components/marginer';
// import Map from '../../components/map/map';

export default function ReviewResult() {
  const [reviewResult, setReviewResult] = useState([]);

  const { id } = useParams();
  console.log(id);

  // API로 부터 선릉역 주변 식당 정보 받아옴 (category, img, lat, lng, name)
  // test 도쿄등심
  const GetSelectedInfoAPI = async () => {
    const SelectedResponse = await axios.get(
      `http://3.139.100.234:5000/reviews/${id}`,
    );
    setReviewResult(SelectedResponse.data.data);
    console.log('GetSelectedInfo API complete');
    return SelectedResponse.data;
  };

  useEffect(() => {
    GetSelectedInfoAPI();
  }, []);

  console.log('ReviewResult data', reviewResult);

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
        <Marginer direction="vertical" margin="4rem" />

        <div className="ReviewRatingContainer">
          <div className="kakaoRating">
            <h1>카카오</h1>
            <Marginer direction="vertical" margin="1rem" />
            <h2 style={{ color: '#ff5722' }}>{reviewResult.kakao}</h2>
          </div>
          <div className="mangoRating">
            <h1>망고 플레이트</h1>
            <Marginer direction="vertical" margin="1rem" />
            <h2 style={{ color: '#ff5722' }}>{reviewResult.mango}</h2>
          </div>
          <div className="naverRating">
            <h1>네이버</h1>
            <Marginer direction="vertical" margin="1rem" />
            <h2 style={{ color: '#ff5722' }}>{reviewResult.naver}</h2>
          </div>
          <div className="siksinRating">
            <h1>식신</h1>
            <Marginer direction="vertical" margin="1rem" />
            <h2 style={{ color: '#ff5722' }}>{reviewResult.siksin}</h2>
          </div>
        </div>
        <Marginer direction="vertical" margin="3rem" />

        <div className="buttonContainer">
          <Link to="/reviews">
            <button type="button" className="button-prev">
              다른 음식점 검색하기
            </button>
          </Link>
        </div>

        <Marginer direction="vertical" margin="4rem" />
        <object
          type="image/svg+xml"
          data="/static/media/-naver.2e6b221b.svg"
          className="svg"
          style={{ width: '80%' }}
        />
        <Marginer direction="vertical" margin="1rem" />
        <h3 className="bodyText">
          리뷰왕은 검색하신 음식점의 대한 정보를 크롤링하여 사용자에게
          제공합니다.
        </h3>

        <Marginer direction="vertical" margin="2rem" />
        {/* <Map data={[selectedData]} /> */}
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
