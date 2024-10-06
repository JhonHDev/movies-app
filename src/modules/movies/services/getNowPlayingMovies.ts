import moviesAPI from '../../../config/axios';

import {MOVIES_NOW_PLAYING} from '../../../config/api';

import {NowPlayingMoviesResponse} from '../models/NowPlayingMoviesResponse';

const getNowPlayingMovies = async () => {
  try {
    const response = await moviesAPI.get<NowPlayingMoviesResponse>(
      `${MOVIES_NOW_PLAYING}`,
    );

    console.log(' ');
    console.log('--------------- NOW PLAYING MOVIES ---------------');
    console.log(JSON.stringify(response.data, null, 2));
    console.log('--------------- NOW PLAYING MOVIES  ---------------');
    console.log(' ');

    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new Error('Error al obtener películas en cartelera');
  }
};

export default getNowPlayingMovies;
