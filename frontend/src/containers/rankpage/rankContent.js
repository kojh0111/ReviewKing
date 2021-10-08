import './rankContent.scss';
import { Link } from 'react-router-dom';
import React from 'react';
// import useEffect from 'react';
// import axios from 'axios';
import Marginer from '../../components/marginer';
import MenuCategory from '../../const/menuCategory';

export default function RankContent() {
  // API로 부터 카테고리 정보 & 이미지를 받아옴(id: 36~70)
  // const GetCategoryAPI = async () => {
  //   const CategoryResponse = await axios
  //     .get(``)
  //     .then(Response => {
  //       console.log(Response.data);
  //     })
  //     .catch(Error => {
  //       console.log(Error);
  //     });
  //   return CategoryResponse.data;
  // };

  // useEffect(() => {
  //   GetCategoryAPI();
  // }, []);

  return (
    <div className="RankContainer">
      <Marginer direction="vertical" margin="3rem" />
      <h2 className="TitleText"> 업종별 순위 예시</h2>
      <Marginer direction="vertical" margin="4rem" />

      <div className="choiceRankContainer">
        {MenuCategory.map(category => (
          <Link to={`/rank/result/${category}`}>
            <button type="button" className="menuCategory">
              {category}
            </button>
          </Link>
        ))}
      </div>

      <Marginer direction="vertical" margin="8rem" />
    </div>
  );
}

// TODO. API 완성되면 test 해볼 부분 => 카테고리 뜨나 확인!
// {GetCategoryAPI.map(option => (
//   <Link to={`/rank/result/${option.category_id}`}>
//     <button type="button" className="menuCategory">
//       {option.category}
//     </button>
//   </Link>
// ))}
