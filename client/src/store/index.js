import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// initialize app state
const initialState = {};

// middleware array 
const moddleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...moddleware));

export {
  store,
}