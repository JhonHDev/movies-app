import {useInfiniteQuery} from '@tanstack/react-query';

import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../services';

const useMovies = () => {
  const popularMoviesQuery = useInfiniteQuery({
    queryKey: ['getPopularMovies'],
    queryFn: ({pageParam = 1}) => getPopularMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => lastPage.page + 1,
    staleTime: 3600000,
  });

  const playingMoviesQuery = useInfiniteQuery({
    queryKey: ['getNowPlayingMovies'],
    queryFn: ({pageParam = 1}) => getNowPlayingMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => lastPage.page + 1,
    staleTime: 3600000,
  });

  const topRatedMoviesQuery = useInfiniteQuery({
    queryKey: ['getTopRatedMovies'],
    queryFn: ({pageParam}) => getTopRatedMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => lastPage.page + 1,
    staleTime: 3600000,
  });

  const upcomingMoviesQuery = useInfiniteQuery({
    queryKey: ['getUpcomingMovies'],
    queryFn: ({pageParam}) => getUpcomingMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => lastPage.page + 1,
    staleTime: 3600000,
  });

  return {
    popularMoviesQuery,
    playingMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
  };
};

export default useMovies;
