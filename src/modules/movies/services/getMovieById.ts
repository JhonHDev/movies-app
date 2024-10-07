import moviesAPI from '../../../config/axios';

import {MovieByIDResponse} from '../models/MovieByIdResponse';

const getMovieById = async (movieId: string) => {
  try {
    const response = await moviesAPI.get<MovieByIDResponse>(`/${movieId}`);

    return response.data;
  } catch (error) {
    throw new Error('Error al obtener una película por su id');
  }
};

export default getMovieById;
