import {NowPlayingMovie} from './NowPlayingMoviesResponse';
import {PopularMovie} from './PopularMoviesResponse';
import {TopRatedMovie} from './TopRatedMoviesResponse';
import {UpcomingMovie} from './UpcomingMoviesResponse';

export type Movies =
  | NowPlayingMovie[]
  | PopularMovie[]
  | TopRatedMovie[]
  | UpcomingMovie[]
  | [];

export type Movie =
  | NowPlayingMovie
  | PopularMovie
  | TopRatedMovie
  | UpcomingMovie;
