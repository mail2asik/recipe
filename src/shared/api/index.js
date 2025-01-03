import config from './config';

export const registerApi = params => {
  return config({
    url: `/auth/register`,
    method: 'POST',
    data: params
  });
};

export const activateApi = params => {
  return config({
    url: `/auth/activate-by-url/${params.email}/${params.token}`,
    method: 'POST'
  });
};

export const loginApi = params => {
  return config({
    url: `/auth/login`,
    method: 'POST',
    data: params
  });
};

export const logoutApi = () => {
  return config({
    url: `/auth/logout`,
    method: 'POST'
  });
};

export const forgotPasswordApi = params => {
  return config({
    url: `/auth/password-reminder`,
    method: 'POST',
    data: params
  });
};

export const resetPasswordApi = params => {
  return config({
    url: `/auth/password-reset`,
    method: 'POST',
    data: params
  });
};
