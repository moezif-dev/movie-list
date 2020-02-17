import React from 'react';
import { Link } from 'react-router-dom';

import './css/movie-card.scss';

const MovieCard = (props) => {
  return (
    <div className="movie-card card">
      <div className="card-image text-center">
        <img className="movie-poster" src={props.poster} alt={props.title} />
      </div>
      <div className="card-section">
        <Link to={`/media/${props.id}`}><h4>{props.title}</h4></Link>
        <p>{props.year}</p>
      </div>
    </div>
  )
};

export default MovieCard;