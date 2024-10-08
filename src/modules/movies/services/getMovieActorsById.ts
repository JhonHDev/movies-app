import moviesAPI from '../../../config/axios';
import {MovieActorsByIDResponse} from '../models/MovieActorsByIdResponse';

const getMovieActorsById = async (movieId: string) => {
  try {
    const response = await moviesAPI.get<MovieActorsByIDResponse>(
      `/${movieId}/credits`,
    );

    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los actores de la película por su id');
  }
};

export default getMovieActorsById;
