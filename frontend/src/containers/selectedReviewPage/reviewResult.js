import './reviewResult.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import Marginer from '../../components/marginer';
import SearchBar from '../../components/searchBar/searchBar';
// import Map from '../../components/map/map';
import ReviewSites from '../../const/reviewSites';
import dummy from '../../const/responses.json';

export default function ReviewResult() {
  const { name } = useParams();
  console.log(name);

  const data = Object.values(dummy.data);

  // 선택한 음식점의 정보만 가져옴(selectedData)
  const selectedData = data.find(value => {
    if (value.name === name) {
      return value;
    }
  });

  console.log(selectedData);

  return (
    <div className="ReviewContainer">
      <Marginer direction="vertical" margin="3rem" />
      <h2 className="TitleText"> 음식점 리뷰 결과 예시</h2>

      <Marginer direction="vertical" margin="1rem" />

      <div className="ReviewIntroContainer">
        <h3 className="bodyText">
          음식점 리뷰 페이지는 사용자가 선택한 음식점의 리뷰 변화를 한 눈에 볼
          수 있는 페이지입니다. (설명이 들어갈 공간)
        </h3>

        <Marginer direction="vertical" margin="2rem" />
        <div className="NameContainer">
          <h3 className="bodyText">선택하신 음식점:</h3>
          <h3 className="bodyText" style={{ color: '#ff5722' }}>
            {name}
          </h3>
        </div>
        <Marginer direction="vertical" margin="2rem" />

        <SearchBar />
        <Marginer direction="vertical" margin="3rem" />

        <div className="ReviewRatingContainer">
          {ReviewSites.map(option => (
            <div className="reviewSite">
              <h1>{option.name}</h1>
              <Marginer direction="vertical" margin="1rem" />
              <h2 style={{ color: '#ff5722' }}>{option.rating}</h2>
              <Marginer direction="vertical" margin="2rem" />
            </div>
          ))}
        </div>

        <Marginer direction="vertical" margin="2rem" />
        <img alt="" className="WordCloudImage" />
        <Marginer direction="vertical" margin="1rem" />
        <h3 className="bodyText">워드클라우드가 출력되는 공간</h3>

        <Marginer direction="vertical" margin="2rem" />
        {/* <Map data={selectedData} /> */}
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
