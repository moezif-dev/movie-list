import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Alert, SearchBar, SearchResults } from '../../components';
import { useQuery } from '../../utils';

const SEARCH_PATH = '/';

const SearchView = () => {
  const history = useHistory();
  const { value: pageValue = 1} = useParams();
  const { term: pageTerm = '', type: pageType = 'movies' } = useQuery();
  
  const pageNumber = pageValue * 1;

  const [searchTerm, setSearchTerm] = useState(pageTerm);
  const [searchType, setSearchType] = useState(pageType);

  const handleSubmit = (e, type, term) => {
    e.preventDefault();
    // update location to search path
    history.push(SEARCH_PATH);

    // update state 
    setSearchTerm(term);
    setSearchType(type);
  };

  const FallbackMessage = () => <Alert><p>Use the search bar to search OMDb.</p></Alert>;

  return (
    <div className="search-view">
      <SearchBar handleSubmit={handleSubmit} />
      {/* check if searchTerm exists, otherwise return fallback message */}    
      {
        searchTerm ? <SearchResults type={searchType} term={searchTerm} page={pageNumber} /> : <FallbackMessage />
      }
    </div>
  )
}

export default SearchView;