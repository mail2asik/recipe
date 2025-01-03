import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const AllReducers = combineReducers({});

const store = createStore(AllReducers, {}, applyMiddleware(thunk));

export default store;
