import './reviewContent.scss';
import React, { useEffect } from 'react';
import axios from 'axios';
import Marginer from '../../components/marginer';
import SearchBar from '../../components/searchBar/searchBar';
import Map from '../../components/map/map';
import dummy from '../../const/responses.json';

const allData = Object.values(dummy.data);
console.log(allData);

export default function ReviewContent() {
  // API로 부터 선릉역 주변 식당 정보 받아옴 (category, img, lat, lng, name)
  const GetRestaurantsInfoAPI = async () => {
    const RestaurantsResponse = await axios.get(``);
    return RestaurantsResponse.data;
  };

  // key값을 POST로 전달하는 API
  const PostRestaurantsAPI = async () => {
    const PushResponse = await axios.post(``);
    const Key = PushResponse.data.name;
    const pullResponse = await axios.get(`${Key}`);
    return pullResponse;
  };

  // 콘솔 확인
  console.log(GetRestaurantsInfoAPI);
  console.log(PostRestaurantsAPI);

  useEffect(() => {
    GetRestaurantsInfoAPI();
  }, []);

  return (
    <div className="ReviewContainer">
      <Marginer direction="vertical" margin="3rem" />
      <h2 className="TitleText"> 음식점 리뷰 예시</h2>

      <Marginer direction="vertical" margin="1rem" />

      <div className="ReviewIntroContainer">
        <h3 className="bodyText">
          음식점 리뷰 페이지는 사용자가 선택한 음식점의 리뷰 변화를 한 눈에 볼
          수 있는 페이지입니다. (설명이 들어갈 공간)
        </h3>

        <Marginer direction="vertical" margin="2rem" />
        <div className="NameContainer">
          <h3 className="bodyText">선택하신 음식점:</h3>
        </div>
        <Marginer direction="vertical" margin="2rem" />

        <SearchBar />

        <Marginer direction="vertical" margin="4rem" />

        <Map data={allData} />

        <Marginer direction="vertical" margin="2rem" />

        <h3 className="bodyText">
          지도 혹은 음식점 리스트가 나오면 사용자가 선택하는 공간 (사용자와
          상호작용)
        </h3>

        <Marginer direction="vertical" margin="3rem" />
      </div>
    </div>
  );
}
