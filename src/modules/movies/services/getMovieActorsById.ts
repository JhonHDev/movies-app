import moviesAPI from '../../../config/axios';
import {MovieActorsByIDResponse} from '../models/MovieActorsByIdResponse';

const getMovieActorsById = async (movieId: string) => {
  try {
    const response = await moviesAPI.get<MovieActorsByIDResponse>(
      `/${movieId}/credits`,
    );

    console.log(' ');
    console.log('--------------- MOVIE ACTORS BY ID ---------------');
    console.log(JSON.stringify(response.data, null, 2));
    console.log('--------------- MOVIE ACTORS BY ID  ---------------');
    console.log(' ');

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener los actores de la película por su id');
  }
};

export default getMovieActorsById;
