import {useQueries} from '@tanstack/react-query';

import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../services';

const useMovies = () => {
  const results = useQueries({
    queries: [
      {
        queryKey: ['getNowPlayingMovies'],
        queryFn: getNowPlayingMovies,
      },
      {
        queryKey: ['getPopularMovies'],
        queryFn: getPopularMovies,
      },
      {
        queryKey: ['getTopRatedMovies'],
        queryFn: getTopRatedMovies,
      },
      {
        queryKey: ['getUpcomingMovies'],
        queryFn: getUpcomingMovies,
      },
    ],
  });

  return {
    nowPlayingMovies: {
      ...results[0],
    },
    popularMovies: {
      ...results[1],
    },
    topRatedMovies: {
      ...results[2],
    },
    upcomingMovies: {
      ...results[3],
    },
  };
};

export default useMovies;
