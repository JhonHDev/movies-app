import moviesAPI from '../../../config/axios';

import {MovieByIDResponse} from '../models/MovieByIdResponse';

const getMovieById = async (movieId: string) => {
  try {
    const response = await moviesAPI.get<MovieByIDResponse>(`/${movieId}`);

    console.log(' ');
    console.log('--------------- MOVIE BY ID ---------------');
    console.log(JSON.stringify(response.data, null, 2));
    console.log('--------------- MOVIE BY ID  ---------------');
    console.log(' ');

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener una película por su id');
  }
};

export default getMovieById;
