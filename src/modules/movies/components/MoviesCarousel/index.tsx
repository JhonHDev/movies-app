import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ActivityIndicator,
} from 'react-native';

import {Movies} from '../../models/Movies';

import MovieCard from '../MovieCard';

interface Props {
  isFetching: boolean;
  title: string;
  movies: Movies;
  isNowPlaying?: boolean;
  loadNextMoviesPage?: () => void;
}

const MoviesCarousel = ({
  isFetching,
  title,
  movies,
  isNowPlaying,
  loadNextMoviesPage,
}: Props) => {
  const handleOnScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!loadNextMoviesPage) {
      return;
    }

    const {contentOffset, layoutMeasurement, contentSize} = e.nativeEvent;

    const isEndScroll =
      contentOffset.x + layoutMeasurement.width + 500 >= contentSize.width;

    if (!isEndScroll) {
      return;
    }

    loadNextMoviesPage();
  };

  return (
    <>
      <View>
        <Text style={styles.carosuelTitle}>{title}</Text>

        <FlatList
          data={movies}
          renderItem={({item}) => (
            <MovieCard movie={item} isNowPlaying={isNowPlaying} />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
        />
      </View>
    </>
  );
};

export default MoviesCarousel;

const styles = StyleSheet.create({
  carosuelTitle: {
    flex: 1,
    paddingVertical: 20,
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
