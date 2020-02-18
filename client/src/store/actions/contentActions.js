import { ADD_CONTENT, DELETE_CONTENT, ADD_WATCHED, DELETE_WATCHED } from '../actions/types';

export const addContent = (newContent) => dispatch => {
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

export const addWatched = (contentId) => dispatch => {
  return dispatch({
    type: ADD_WATCHED,
    payload: {
      contentId,
    }
  })
}

export const deleteWatched = (contentId) => dispatch => {
  return dispatch({
    type: DELETE_WATCHED,
    payload: {
      contentId,
    }
  })
}