import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, MovieList } from '../../components';

import './css/content-view.scss';

const ContentView = () => {
  const allContent = useSelector( state => state.content.allContent );
  
  if(!allContent.length){
    return (
      <div className="my-content">
        <Alert>You will need to add movies to your collection in order to see them here.</Alert>
      </div>
    )
  };

  return (
    <div className="content-view">
      <h4>My Content:</h4>
      <MovieList movies={allContent} col="4" />
    </div>
  ) 
}

export default ContentView;