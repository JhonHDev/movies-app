import moviesAPI from '../../../config/axios';

import {MOVIES_NOW_PLAYING} from '../../../config/api';

import {NowPlayingMoviesResponse} from '../models/NowPlayingMoviesResponse';

const getNowPlayingMovies = async (page?: number) => {
  try {
    const response = await moviesAPI.get<NowPlayingMoviesResponse>(
      `${MOVIES_NOW_PLAYING}`,
      {
        params: {
          page: page || 1,
        },
      },
    );

    const {results: movies, ...rest} = response.data;
    const mainMovie = movies[0];

    return {
      ...rest,
      mainMovie,
      results: movies.filter(movie => movie.id != mainMovie.id),
    };
  } catch (error: any) {
    console.log(error);
    throw new Error('Error al obtener películas en cartelera');
  }
};

export default getNowPlayingMovies;
