import moviesAPI from '../../../config/axios';

import {PopularMoviesResponse} from '../models/PopularMoviesResponse';

import {POPULAR_MOVIES} from '../../../config/api';

const getPopularMovies = async (page?: number) => {
  try {
    const response = await moviesAPI.get<PopularMoviesResponse>(
      `${POPULAR_MOVIES}`,
      {
        params: {
          page: page || 1,
        },
      },
    );

    return response.data;
  } catch (error: any) {
    throw new Error('Error al obtener películas populares');
  }
};

export default getPopularMovies;
