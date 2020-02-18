import React from 'react';
import { MovieActions, MovieCard } from '../';

const MovieList = ({ movies, col, showActions = false }) => {
  return (
    <div className="movies-list grid-container">
      <div className={`grid-x grid-margin-x small-2 medium-up-${col}`}>
        { movies.map( (movie, index) => {
            return (
              <div key={`${movie.imdbID}-${index}`} className="cell">
                  <MovieCard 
                    id={movie.imdbID}
                    poster={movie.Poster} 
                    title={movie.Title}
                    year={movie.Year}
                  />
                  { showActions && <MovieActions id={movie.imdbID} />}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
export default MovieList;