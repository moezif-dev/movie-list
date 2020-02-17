import React, { useState } from 'react';

import './css/search-bar.scss';

const SEARCH_TYPES = ['Movie', 'Series', 'Episode'];
const DEFAULT_SEARCH_TYPE = SEARCH_TYPES[0];

const SearchBar = (props) => {
  const { handleSubmit } = props;
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState(DEFAULT_SEARCH_TYPE);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }

  const handleSelect = (e) => {
    const { value } = e.target;
    setSearchType(value);
  }

  return (
    <div className="search-bar-form">
      <h3>Find your favorite Movie!</h3>
      <form onSubmit={(e) => handleSubmit(e, searchType, searchValue) }>
        <div className="input-group">
          <label className="input-group-label">Search type
          <select onChange={handleSelect} className="input-select">
            { SEARCH_TYPES.map( (option, index) => <option key={`${option}-${index}`} value={option} >{option}</option> ) }
          </select>
          </label>
          <input 
            className="input-group-field input-search" 
            type="text" 
            placeholder={`Search ${searchType} database`}
            value={searchValue} 
            onChange={handleChange}
          />
          <div className="input-group-button">
            <button type="submit" className="button" value="Submit">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;