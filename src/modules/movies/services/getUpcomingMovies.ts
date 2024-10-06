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

    console.log(' ');
    console.log('--------------- UPCOMING MOVIES ---------------');
    console.log(JSON.stringify(response.data, null, 2));
    console.log('--------------- UPCOMING MOVIES  ---------------');
    console.log(' ');

    return response.data;
  } catch (error: any) {
    console.log(error.response);
    throw new Error('Error al obtener próximas películas');
  }
};

export default getUpcomingMovies;
