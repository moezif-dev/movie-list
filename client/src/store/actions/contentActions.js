import { ADD_CONTENT, DELETE_CONTENT } from '../actions/types';

export const addContent = (newContent) => dispatch => {
    console.log('add content action') 
    return dispatch({
      type: ADD_CONTENT,
      payload: {
        newContent,
      }
    })
}

export const deleteContent = (contentId) => dispatch => {
  return dispatch({
    type: DELETE_CONTENT,
    payload: {
      contentId,
    }
  })
}