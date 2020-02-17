import React from 'react';

import './css/rating-widget.scss';

const RatingWidget = ({ value }) => (
  <div className="rating-widget">
    <div className="imdb-rating rating-cell">
      <span className="icon star-icon"></span>
      <span className="media-rating-value">{value}</span>
      <span className="media-rating-score">/10</span>
    </div>
    <button className="user-rating rating-cell">
      <span className="icon star-outline-icon"></span>
      <span className="submit-rating">Rate this</span>
    </button>
  </div>
);

export default RatingWidget;