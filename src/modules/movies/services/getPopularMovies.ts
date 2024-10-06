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

    console.log(' ');
    console.log('--------------- POPULAR MOVIES ---------------');
    console.log(JSON.stringify(response.data, null, 2));
    console.log('--------------- POPULAR MOVIES  ---------------');
    console.log(' ');

    return response.data;
  } catch (error: any) {
    console.log(error.response);
    throw new Error('Error al obtener películas populares');
  }
};

export default getPopularMovies;
