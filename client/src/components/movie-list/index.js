import React from 'react';
import { MovieCard } from '../';

const MovieList = ({ movies, col }) => {
  return (
    <div className="movies-list grid-container">
      <div className={`grid-x grid-margin-x small-up-2 medium-up-${col}`}>
        { movies.map( (movie, index) => {
            return (
              <div key={`${movie.imdbID}-${index}`} className="cell">
                  <MovieCard 
                    id={movie.imdbID}
                    poster={movie.Poster} 
                    title={movie.Title}
                    year={movie.Year}
                  />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
export default MovieList;