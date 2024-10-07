import {useQueries} from '@tanstack/react-query';
import {getMovieById, getMovieActorsById} from '../services';

const useMovie = (movieId: string) => {
  const [movieByIdQuery, movieActorsByIdQuery] = useQueries({
    queries: [
      {
        queryKey: ['getMovieById', movieId],
        queryFn: () => getMovieById(movieId),
        staleTime: 3600000,
      },
      {
        queryKey: ['getMovieActorsById', movieId],
        queryFn: () => getMovieActorsById(movieId),
        staleTime: 3600000,
      },
    ],
  });

  return {
    movieByIdQuery,
    movieActorsByIdQuery,
  };
};

export default useMovie;
