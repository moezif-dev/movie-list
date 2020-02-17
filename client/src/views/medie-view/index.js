import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { MovieDB } from '../../apis';
import { AddContentButton, RatingWidget } from '../../components';
import { PromiseLoader } from '../../utils';

import './css/media-view.scss';

const MediaView = () => {
  const { id } = useParams();
  const movieById =  MovieDB.getMovieById(id);

  return (
    <div className="media-view">
      <PromiseLoader promise={movieById}>
        { media => (
          <Fragment>
            <h1 className="media-title">{media.Title} <small>({media.Year})</small></h1>
            <hr />
            <div className="grid-x grid-margin-x">
              <div className="poster-container cell medium-4 small-12 text-center">
                <img src={media.Poster} alt={`${media.Title} Poster`}/>
              </div>
              <div className="content-container cell medium-8 small-12">
                { media.Type && <span className={`media-badge ${media.Type}`}>{media.Type}</span> }
                { media.Rated && <span className={`media-badge rating`}>{media.Rated}</span> }
                { media.Runtime && <span className={`media-badge runtime`}>{media.Runtime}</span> }
                <p><strong>Genre:</strong> {media.Genre}</p>
                <p className="media-description">{media.Plot}</p>
                <div className="actions-container">
                  <AddContentButton media={media} />
                </div>
              </div>
              <div className="rating-container cell small-12">
                <RatingWidget value={media.imdbRating} />
              </div>
            </div>
          </Fragment>
          )}
      </PromiseLoader>
    </div>
  )
}

export default MediaView;