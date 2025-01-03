import axios from 'axios';
import store from '../../store';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
    config => {
      const auth = store.getState().auth;
      if (auth.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
);

const config = options => {
  const onSuccess = response => {
    return response.data.response;
  };

  const onError = error => {
    // TODO:: We need to handle "request" and "Unknown" error
    // Read more: https://github.com/axios/axios#handling-errors
    return Promise.reject(error.response.data.error);
  };

  return api(options)
      .then(onSuccess)
      .catch(onError);
};

export default config;
