import React, {Fragment} from 'react';

import { Alert, MovieList, Pagination } from '..';
import { MovieDB } from '../../apis';
import { PromiseLoader } from '../../utils';

const RESULTS_COLUMNS = 4;

const SearchResults = ({type, term, page}) => {
  // initalize the page with empty results.
  const SearchPromise = MovieDB.search(type, term, page);

  return (
    <PromiseLoader
      promise={SearchPromise}
    >
      { (data) => {
          // handle Too many results Error (successful response, but no results).
          if(data.Error){
            const { Error } = data;
            return (
              <Alert type="alert">
                <h5>Error:</h5>
                <p>{Error}</p>
              </Alert>
            )
          };

          const { Search: movies, totalResults } = data; 
          const pages = Math.ceil(totalResults/10);
          return (
            <Fragment>
              <MovieList movies={movies} col={RESULTS_COLUMNS} />
              <Pagination activePage={page} pages={pages} term={term} type={type} />
            </Fragment>
          )
        } 
      }
    </PromiseLoader>
  );
}

export default SearchResults;