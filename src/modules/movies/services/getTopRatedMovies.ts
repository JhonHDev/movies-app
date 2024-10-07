import moviesAPI from '../../../config/axios';

import {TopRatedMoviesResponse} from '../models/TopRatedMoviesResponse';

import {TOP_RATED_MOVIES} from '../../../config/api';

const getTopRatedMovies = async (page?: number) => {
  try {
    const response = await moviesAPI.get<TopRatedMoviesResponse>(
      `${TOP_RATED_MOVIES}`,
      {
        params: {
          page: page || 1,
        },
      },
    );

    return response.data;
  } catch (error: any) {
    throw new Error('Error al obtener películas mejor valoradas');
  }
};

export default getTopRatedMovies;
