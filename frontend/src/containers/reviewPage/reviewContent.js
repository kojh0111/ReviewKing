import './reviewContent.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Marginer from '../../components/marginer';
import SearchBar from '../../components/searchBar/searchBar';
import Map from '../../components/map/map';
// import dummy from '../../const/responses.json';

// const allData = Object.values(dummy.data);

export default function ReviewContent() {
  const [reviewContent, setReviewContent] = useState([]);

  // API로 부터 선릉역 주변 식당 정보 받아옴 (category, img, lat, lng, name)
  const GetRestaurantsInfoAPI = async () => {
    const RestaurantsResponse = await axios.get(
      `http://3.139.100.234:5000/reviews`,
    );
    setReviewContent(RestaurantsResponse.data.data);
    console.log('ReviewContent GetRestaurantsInfoAPI complete');
    return RestaurantsResponse.data;
  };

  useEffect(() => {
    GetRestaurantsInfoAPI();
  }, []);

  console.log('ReviewContent', reviewContent);

  return (
    <div className="ReviewContainer">
      <Marginer direction="vertical" margin="3rem" />
      <h2 className="TitleText"> 음식점 리뷰 </h2>

      <Marginer direction="vertical" margin="2rem" />

      <div className="ReviewIntroContainer">
        <h3 className="bodyText">
          리뷰를 알고 싶은 음식점의 상호명을 입력하여 주시기 바랍니다.
        </h3>

        <Marginer direction="vertical" margin="2rem" />

        <SearchBar />

        <Marginer direction="vertical" margin="4rem" />

        <Map data={reviewContent} />

        <Marginer direction="vertical" margin="2rem" />

        <h3 className="bodyText">
          리뷰왕은 엘리스 본사 근처에 위치한 <br />
          음식점의 대한 정보만 제공합니다.
        </h3>

        <Marginer direction="vertical" margin="3rem" />
      </div>
    </div>
  );
}

// TODO. 로컬에서 MAP 정상작동 하였으나, 마커가 뜨지 않음 => 해결해야함
