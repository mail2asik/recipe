import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import recipeReducer from './reducers/recipeReducer';

const AllReducers = combineReducers({
  auth: authReducer,
  recipe: recipeReducer
});

const store = createStore(AllReducers, {}, applyMiddleware(thunk));

// TODO: make it available only for local development
window.store = store;

export default store;