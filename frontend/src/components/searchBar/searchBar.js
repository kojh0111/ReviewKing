import React, { useState } from 'react';
import './searchBar.scss';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import dummy from '../../const/responses.json';

const data = Object.values(dummy.data);

export default function SearchBar() {
  const [filterData, setFilterData] = useState([]);
  const [clearWord, setClearWord] = useState('');

  const FilterOnChangeHandler = e => {
    const searchWord = e.target.value;
    setClearWord(searchWord);
    const newFilter = data.filter(value => {
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
            <Link to={`/review/${option.name}`}>
              <div className="dataItem">{option.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
