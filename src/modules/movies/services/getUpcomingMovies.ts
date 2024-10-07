import moviesAPI from '../../../config/axios';

import {UpcomingMoviesResponse} from '../models/UpcomingMoviesResponse';

import {UPCOMING_MOVIES} from '../../../config/api';

const getUpcomingMovies = async (page?: number) => {
  try {
    const response = await moviesAPI.get<UpcomingMoviesResponse>(
      `${UPCOMING_MOVIES}`,
      {
        params: {
          page: page || 1,
        },
      },
    );

    return response.data;
  } catch (error: any) {
    throw new Error('Error al obtener próximas películas');
  }
};

export default getUpcomingMovies;
