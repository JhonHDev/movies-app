import React from 'react';

import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import useMovies from '../../hooks/useMovies';

import MainNowPlayingMovie from '../../components/MainNowPlayingMovie';
import MoviesCarousel from '../../components/MoviesCarousel';

const MoviesScreen = () => {
  const {
    popularMoviesQuery,
    playingMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
  } = useMovies();

  const mainMovie = playingMoviesQuery.data?.pages.flatMap(
    page => page.mainMovie,
  )[0];

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000" />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          {mainMovie && (
            <MainNowPlayingMovie
              isFetching={playingMoviesQuery.isFetching}
              isNowPlaying
              mainMovie={mainMovie}
            />
          )}

          <View style={styles.moviesContainer}>
            {popularMoviesQuery.data && (
              <MoviesCarousel
                isFetching={popularMoviesQuery.isFetching}
                title="Populares"
                movies={popularMoviesQuery.data.pages.flatMap(
                  page => page.results,
                )}
                loadNextMoviesPage={popularMoviesQuery.fetchNextPage}
              />
            )}

            {playingMoviesQuery.data && (
              <MoviesCarousel
                isFetching={playingMoviesQuery.isFetching}
                isNowPlaying
                title="En cartelera"
                movies={playingMoviesQuery.data.pages.flatMap(
                  page => page.results,
                )}
                loadNextMoviesPage={playingMoviesQuery.fetchNextPage}
              />
            )}

            {topRatedMoviesQuery.data && (
              <MoviesCarousel
                isFetching={topRatedMoviesQuery.isFetching}
                title="Mejor valoradas"
                movies={topRatedMoviesQuery.data.pages.flatMap(
                  page => page.results,
                )}
                loadNextMoviesPage={topRatedMoviesQuery.fetchNextPage}
              />
            )}

            {upcomingMoviesQuery.data && (
              <MoviesCarousel
                isFetching={upcomingMoviesQuery.isFetching}
                title="Próximas en salir"
                movies={upcomingMoviesQuery.data.pages.flatMap(
                  page => page.results,
                )}
                loadNextMoviesPage={upcomingMoviesQuery.fetchNextPage}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoviesScreen;

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('screen').height,
    paddingBottom: 40,
    backgroundColor: '#000',
  },
  moviesContainer: {
    gap: 40,
  },
});
