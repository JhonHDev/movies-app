import axios from 'axios';

import {MOVIES_API_BASE} from '../api';
import {THE_MOVIE_DB_API_KEY} from '@env';

const moviesAPI = axios.create({
  baseURL: MOVIES_API_BASE,
});

moviesAPI.interceptors.request.use(
  config => {
    config.params = {
      ...config.params,
      api_key: THE_MOVIE_DB_API_KEY,
      language: 'es',
    };

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default moviesAPI;
