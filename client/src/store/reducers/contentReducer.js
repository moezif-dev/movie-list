import { ADD_CONTENT, DELETE_CONTENT, ADD_WATCHED, DELETE_WATCHED } from '../actions/types';

const initialState = {
  allContent: [],
  watched: [],
};

export default (state = initialState, action) => {
  const { type, payload = {} } = action;

  switch(type){
    case ADD_CONTENT: {
      const { newContent } = payload;
      
      return {
        ...state,
        allContent: [...state.allContent, newContent]
      }
    }
    case DELETE_CONTENT: {
      const { contentId } = payload;
      // remove from all content
      const contentToRemove = state.allContent.findIndex( c => c.imdbID === contentId);
      state.allContent.splice(contentToRemove, 1);
      
      // remove from watched content
      const watchedToRemove = state.watched.findIndex( c => c.imdbID === contentId);
      
      // insure index value exists
      if( ~watchedToRemove ) state.watched.splice(watchedToRemove, 1);

      return {
        ...state,
        allContent: [...state.allContent],
        watched: [...state.watched],
      }
    }
    case ADD_WATCHED: {
      const { contentId } = payload;
      const content = state.allContent.find( c => c.imdbID === contentId) || [];

      return {
        ...state,
        watched: [...state.watched, content]
      }
    }
    case DELETE_WATCHED: {
      const { contentId } = payload;
      const indexToRemove = state.watched.findIndex( c => c.imdbID === contentId);
      state.watched.splice(indexToRemove, 1);
      return {
        ...state,
        watched: [...state.watched],
      }
    }
    default:{
      return state;
    }
  }
}