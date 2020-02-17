import { ADD_CONTENT, DELETE_CONTENT } from '../actions/types';

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
      const indexToRemove = state.allContent.findIndex( c => c.imdbID === contentId);
      state.allContent.splice(indexToRemove, 1);
      return {
        ...state,
        allContent: [...state.allContent],
      }
    }
    default:{
      return state;
    }
  }
}