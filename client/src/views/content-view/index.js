import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, MovieList } from '../../components';

import './css/content-view.scss';

const ContentView = () => {
  // TODO: fix re-render
  const { allContent, watched: watchedContent} = useSelector( state => { 
    const { content = {} } = state;
    const { allContent = [], watched = [] } = content;

    return { allContent, watched };
  });
  
  if(!allContent.length){
    return (
      <div className="content-view">
        <Alert>You will need to add content to your collection in order to see them here.</Alert>
      </div>
    )
  };

  return (
    <div className="content-view">
      <h4>My Content:</h4>
      <MovieList movies={allContent} col={3} showActions={true}/>

      <h4>Watched Content</h4>
      {watchedContent.length ? 
         <MovieList movies={watchedContent} col={3} showActions={true}/> :
        <Alert>You will need to mark content as "Watched" in order to see them here.</Alert>
      } 
    </div>
  ) 
}

export default ContentView;