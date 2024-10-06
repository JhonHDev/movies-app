import React from 'react';

import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import useMovies from '../../hooks/useMovies';

import MainNowPlayingMovie from '../../components/MainNowPlayingMovie';
import MoviesCarousel from '../../components/MoviesCarousel';

const MoviesScreen = () => {
  const {nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies} =
    useMovies();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000" />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          {nowPlayingMovies.data && (
            <MainNowPlayingMovie
              isFetching={nowPlayingMovies.isFetching}
              mainMovie={nowPlayingMovies.data.mainMovie}
            />
          )}

          <View style={styles.moviesContainer}>
            {popularMovies.data && (
              <MoviesCarousel
                isFetching={nowPlayingMovies.isFetching}
                title="Populares"
                movies={popularMovies.data?.results}
              />
            )}

            {nowPlayingMovies.data && (
              <MoviesCarousel
                isFetching={nowPlayingMovies.isFetching}
                isNowPlaying
                title="En cartelera"
                movies={nowPlayingMovies.data?.results}
              />
            )}

            {topRatedMovies.data && (
              <MoviesCarousel
                isFetching={nowPlayingMovies.isFetching}
                title="Mejor valoradas"
                movies={topRatedMovies.data?.results}
              />
            )}

            {upcomingMovies.data && (
              <MoviesCarousel
                isFetching={nowPlayingMovies.isFetching}
                title="Próximas en salir"
                movies={upcomingMovies.data?.results}
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
