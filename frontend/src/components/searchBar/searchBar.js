import React, { useEffect, useState } from 'react';
import './searchBar.scss';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SearchBar() {
  const [searchBar, setSearchBar] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [clearWord, setClearWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API로 부터 선릉역 주변 식당 정보 받아옴 (category, img, lat, lng, name)
  const GetRestaurantsInfoAPI = async () => {
    // 요청이 시작 할 때 초기화
    setError(null);
    setSearchBar(null);
    setLoading(true);
    // axios.get으로 데이터 받아옴
    const RestaurantsResponse = await axios
      .get(`http://3.139.100.234:5000/reviews`)
      .then(response => {
        setSearchBar(response.data.data);
      })
      .catch(e => {
        setError(e);
      });
    setLoading(false);
    return RestaurantsResponse;
  };

  useEffect(() => {
    GetRestaurantsInfoAPI();
  }, []);

  if (loading)
    return <div style={{ color: '#ff5722', fontSize: '2rem' }}>로딩중....</div>;
  if (error)
    return (
      <div style={{ color: '#ff5722', fontSize: '2rem' }}>
        에러가 발생했습니다
      </div>
    );
  if (!searchBar) return null;

  // 검색 부분

  const FilterOnChangeHandler = e => {
    const searchWord = e.target.value;
    setClearWord(searchWord);
    const newFilter = searchBar.filter(value => {
      return value.name.includes(searchWord);
    });
    setFilterData(newFilter);
  };

  const clearInput = () => {
    setFilterData([]);
    setClearWord('');
  };

  return (
    <div className="SearchContainer">
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search..."
          value={clearWord}
          onChange={FilterOnChangeHandler}
        />
        <div className="searchIcon">
          {filterData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon className="clearBTN" onClick={clearInput} />
          )}
        </div>
      </div>
      {filterData.length !== 0 && (
        <div className="dataResult">
          {filterData.slice(0, 10).map(option => (
            <Link to={`/reviews/${option.id}`}>
              <div className="dataItem">{option.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
