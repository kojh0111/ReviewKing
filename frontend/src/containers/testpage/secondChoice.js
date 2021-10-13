import './secondChoice.scss';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Marginer from '../../components/marginer';

export default function SecondChoice() {
  const menuSet = new Set();
  const { subctr } = useParams();
  console.log('subctr', subctr);

  const [secondChoice, setSecondChoice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API로 부터 키워드를 받아옴
  const GetKeywordAPI = async () => {
    // 요청이 시작 할 때 초기화
    setError(null);
    setSecondChoice(null);
    setLoading(true);
    const CategoryResponse = await axios
      .get(`http://3.139.100.234:5000/what-to-eat/${subctr}`)
      .then(response => {
        setSecondChoice(response.data.keywords);
      })
      .catch(e => {
        setError(e);
      });
    setLoading(false);
    return CategoryResponse;
  };

  useEffect(() => {
    GetKeywordAPI();
    console.log('menuSet', menuSet);
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
  if (!secondChoice) return null;

  return (
    <div className="CategoryContainer">
      <Marginer direction="vertical" margin="2rem" />
      <h1 style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: '#ff5722' }}>키워드를 선택하세요</div>
        <Marginer direction="vertical" margin="1rem" />
        <div style={{ color: '#0b214a' }}>&nbsp;최대 5개 선택가능</div>
      </h1>
      <Marginer direction="vertical" margin="2rem" />
      <div className="choiceContainer">
        {secondChoice.map(keyword => (
          <button
            type="button"
            className="menuCategory"
            onClick={() => menuSet.add(keyword)}
          >
            {keyword}
          </button>
        ))}
      </div>

      <div className="buttonContainer">
        <Link to="/what-to-eat/category/">
          <button type="button" className="button-prev">
            이전
          </button>
        </Link>
        <Link to={`/what-to-eat/category/${subctr}/${menuSet}`}>
          <button type="button" className="button-next">
            결과 확인
          </button>
        </Link>
      </div>
    </div>
  );
}
