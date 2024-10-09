import {useQuery} from '@tanstack/react-query';

import searchMoviesByName from '../services/searchMoviesByName';

const useSearchMovies = (queryText: string) => {
  const searchMoviesQuery = useQuery({
    queryKey: ['searchMoviesByName', {queryText}],
    queryFn: () => searchMoviesByName(queryText),
    enabled: queryText.trim().length > 0,
    staleTime: 3600000,
  });

  return {
    searchMoviesQuery,
  };
};

export default useSearchMovies;
