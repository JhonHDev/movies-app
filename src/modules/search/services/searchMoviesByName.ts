import axios from 'axios';

import {THE_MOVIE_DB_API_KEY} from '@env';
import {SearchMoviesResponse} from '../models/SearchMoviesReponse';

const searchMoviesByName = async (movieName: string, page?: number) => {
  const customPage = page || 1;

  const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=es&page=${customPage}&api_key=${THE_MOVIE_DB_API_KEY}`;

  try {
    const response = await axios.get<SearchMoviesResponse>(url);

    return response.data.results || [];
  } catch (error) {
    throw new Error('Error al buscar una película por su nombre');
  }
};

export default searchMoviesByName;
