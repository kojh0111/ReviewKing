import './firstChoice.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Marginer from '../../components/marginer';
// import TastesCategory from '../../const/tastesCategory';

export default function FirstChoice() {
  const [firstChoice, setFirstChoice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API로 부터 서브 카테고리 받아옴
  const GetSubcategoryAPI = async () => {
    // 요청이 시작 할 때 초기화
    setError(null);
    setFirstChoice(null);
    setLoading(true);
    const CategoryResponse = await axios
      .get(`http://3.139.100.234:5000/what-to-eat`)
      .then(response => {
        setFirstChoice(response.data.subcategory);
      })
      .catch(e => {
        setError(e);
      });
    setLoading(false);
    return CategoryResponse;
  };

  console.log('firstchoice', firstChoice);

  useEffect(() => {
    GetSubcategoryAPI();
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
  if (!firstChoice) return null;

  return (
    <div className="CategoryContainer">
      <Marginer direction="vertical" margin="2rem" />
      <h1>카테고리를 선택하세요</h1>
      <Marginer direction="vertical" margin="2rem" />
      <div className="choiceContainer">
        {firstChoice.map(subctr => (
          <Link to={`/what-to-eat/category/${subctr}`}>
            <button type="button" className="menuCategory">
              {subctr}
            </button>
          </Link>
        ))}
      </div>

      <div className="buttonContainer">
        <Link to="/what-to-eat/">
          <button type="button" className="button-prev">
            이전
          </button>
        </Link>
      </div>
    </div>
  );
}
