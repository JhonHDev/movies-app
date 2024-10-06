import moviesAPI from '../../../config/axios';

import {TopRatedMoviesResponse} from '../models/TopRatedMoviesResponse';

import {TOP_RATED_MOVIES} from '../../../config/api';

const getTopRatedMovies = async () => {
  try {
    const response = await moviesAPI.get<TopRatedMoviesResponse>(
      `${TOP_RATED_MOVIES}`,
    );

    console.log(' ');
    console.log('--------------- TOP RATED MOVIES ---------------');
    console.log(JSON.stringify(response.data, null, 2));
    console.log('--------------- TOP RATED MOVIES  ---------------');
    console.log(' ');

    return response.data;
  } catch (error: any) {
    console.log(error.response);
    throw new Error('Error al obtener películas mejor valoradas');
  }
};

export default getTopRatedMovies;
