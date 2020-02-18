import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addWatched, deleteWatched, deleteContent } from '../../store/actions/contentActions';

import './css/movie-actions.scss';

const MovieActions = ( {id: contentId} ) => {
  // TODO: fix re-render
  const { allContent, watched: watchedContent} = useSelector( state => { 
    const { content = {} } = state;
    const { allContent = [], watched = [] } = content;

    return { allContent, watched };
  });

  // map dispatch to movie actions
  const dispatch = useDispatch();

  const dispatchedAddWatched = (newContent) => dispatch(addWatched(newContent));
  const disaptchedDeleteWatched = (contentId) => dispatch(deleteWatched(contentId));
  const dispatchedDeleteContent = (contentId) => dispatch(deleteContent(contentId));

  console.log({allContent, watchedContent});
  const isWatched = watchedContent.find( c => c.imdbID === contentId);

  const handleWatchClick = contentId => event => {
    event.preventDefault();

    if(isWatched){
      disaptchedDeleteWatched(contentId);
      return;
    }
    dispatchedAddWatched(contentId);
  };

  const handleContentRemove = contentId => event => {
    event.preventDefault();
    dispatchedDeleteContent(contentId);
  };

  return (
    <div className="movie-actions button-group small expanded stacked-for-small">
      { isWatched ? 
        <button className="button success" onClick={handleWatchClick(contentId)}><i className="fas fa-eye"></i>Watched</button> :
        <button className="button warning" onClick={handleWatchClick(contentId)}><i className="fas fa-eye-slash"></i>Watch</button>
      }
      <button className="button alert" onClick={handleContentRemove(contentId)}>Remove</button>
    </div>
  );
};

export default MovieActions;