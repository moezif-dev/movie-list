import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { loadState, saveState } from '../utils';

// state id will be used to save/retrive redux state from local storage
const STATE_ID = 'REDUX_LOCAL_STATE';

// initialize app state
const initialState = loadState(STATE_ID) || {};

// middleware array 
const moddleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...moddleware));

store.subscribe( () => {
  saveState(STATE_ID, store.getState());
});

export {
  store,
}