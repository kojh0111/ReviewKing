import './secondChoice.scss';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Marginer from '../../components/marginer';

export default function SecondChoice() {
  const { subctr } = useParams();
  const [secondChoice, setSecondChoice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [checkedItems, setCheckedItems] = useState(null);

  // API로 부터 키워드를 받아옴
  const GetKeywordAPI = async () => {
    // 요청이 시작 할 때 초기화

    setCheckedItems(new Set());
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

  const ChekedValueClickHandler = () => {
    // 선택된 목록 가져오기
    const query = 'input[name="keyword"]:checked';
    const selectedEls = document.querySelectorAll(query);

    // 선택된 목록에서 value 찾기
    let result = '';
    selectedEls.forEach(el => {
      result += el.value + ' ';
    });

    // 출력
    document.getElementById('result').innerText = result;
  };

  console.log('checkedItems', checkedItems);

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
          <>
            <input
              type="checkbox"
              className="checkbox"
              name="keyword"
              value={keyword}
              onChange={() => checkedItems.add({ keyword })}
            />
            {keyword}
          </>
        ))}
      </div>

      <div className="buttonContainer">
        <Link to="/what-to-eat/category/">
          <button type="button" className="button-prev">
            이전
          </button>
        </Link>

        <Link to={`/what-to-eat/category/${subctr}/${checkedItems}`}>
          <button
            type="button"
            className="button-next"
            onClick={ChekedValueClickHandler}
          >
            결과 확인
          </button>
        </Link>
      </div>
    </div>
  );
}
