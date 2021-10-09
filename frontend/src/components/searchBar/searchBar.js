import React, { useEffect, useState } from 'react';
import './searchBar.scss';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import dummy from '../../const/responses.json';

// const data = Object.values(dummy.data);

export default function SearchBar() {
  const [searchBar, setSearchBar] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [clearWord, setClearWord] = useState('');

  // API로 부터 선릉역 주변 식당 정보 받아옴 (category, img, lat, lng, name)
  const GetRestaurantsInfoAPI = async () => {
    const RestaurantsResponse = await axios.get(
      `http://3.139.100.234:5000/reviews`,
    );
    setSearchBar(RestaurantsResponse.data.data);
    console.log('SearchBar GetRestaurantsInfoAPI complete');
    return RestaurantsResponse.data;
  };

  useEffect(() => {
    GetRestaurantsInfoAPI();
  }, []);

  console.log('SearchBar', searchBar);

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
