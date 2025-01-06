import { 
  AUTH_LOGIN, 
  AUTH_LOGOUT
} from '../constants/actionTypes';

import {
  registerApi,
  activateApi,
  loginApi,
  logoutApi,
  forgotPasswordApi,
  resetPasswordApi
} from '../shared/api';

export const loginAction = (user, token) => dispatch => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);

  dispatch({
    type: AUTH_LOGIN,
    user,
    token
  });
};

export const logoutAction = () => dispatch => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');

  dispatch({
    type: AUTH_LOGOUT,
    user: false,
    token: false
  });
};

export const registerRequest = params => {
  return registerApi(params);
};

export const activateRequest = params => {
  return activateApi(params);
};

export const loginRequest = params => {
  return loginApi(params);
};

export const logoutRequest = params => {
  return logoutApi(params);
};

export const forgotPasswordRequest = params => {
  return forgotPasswordApi(params);
};

export const resetPasswordRequest = params => {
  return resetPasswordApi(params);
};
