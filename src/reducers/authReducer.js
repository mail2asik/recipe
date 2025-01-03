import { AUTH_LOGIN, AUTH_LOGOUT } from '../constants/actionTypes';

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : false,
  token: localStorage.getItem('token')
    ? localStorage.getItem('token')
    : false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        user: action.user,
        token: action.token
      };
    case AUTH_LOGOUT:
      return {
        user: false,
        token: false
      };
    default:
      return state;
  }
};
