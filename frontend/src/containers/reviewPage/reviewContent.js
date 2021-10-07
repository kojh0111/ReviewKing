import './reviewContent.scss';
import React from 'react';
import Marginer from '../../components/marginer';
import SearchBar from '../../components/searchBar/searchBar';
import Map from '../../components/map/map';
import ReviewSites from '../../const/reviewSites';

export default function ReviewContent() {
  return (
    <div className="ReviewContainer">
      <Marginer direction="vertical" margin="3em" />
      <h2 className="TitleText"> 음식점 리뷰 예시</h2>

      <Marginer direction="vertical" margin="1em" />

      <div className="ReviewIntroContainer">
        <h3 className="bodyText">
          음식점 리뷰 페이지는 사용자가 선택한 음식점의 리뷰 변화를 한 눈에 볼
          수 있는 페이지입니다. (설명이 들어갈 공간)
        </h3>

        <Marginer direction="vertical" margin="4em" />

        <SearchBar />

        <Marginer direction="vertical" margin="2em" />

        <Marginer direction="vertical" margin="1em" />
        <Map />
        <Marginer direction="vertical" margin="1em" />

        <h3 className="bodyText">
          지도 혹은 음식점 리스트가 나오면 사용자가 선택하는 공간 (사용자와
          상호작용)
        </h3>

        <Marginer direction="vertical" margin="3em" />

        <div className="ReviewRatingContainer">
          {ReviewSites.map(option => (
            <div className="reviewSite">
              <h1>{option.name}</h1>
              <Marginer direction="vertical" margin="1em" />
              <h2>{option.rating}</h2>
              <Marginer direction="vertical" margin="2em" />
            </div>
          ))}
        </div>

        <Marginer direction="vertical" margin="2em" />
        <img alt="" className="WordCloudImage" />
        <Marginer direction="vertical" margin="1em" />
        <h3 className="bodyText">워드클라우드가 출력되는 공간</h3>
        <Marginer direction="vertical" margin="6em" />
      </div>
    </div>
  );
}
