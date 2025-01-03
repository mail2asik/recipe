import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';

const AllReducers = combineReducers({
  auth: authReducer
});

const store = createStore(AllReducers, {}, applyMiddleware(thunk));

export default store;