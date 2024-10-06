import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import {Movies} from '../../models/Movies';

import MovieCard from '../MovieCard';

interface Props {
  isFetching: boolean;
  title: string;
  movies: Movies;
  isNowPlaying?: boolean;
}

const MoviesCarousel = ({isFetching, title, movies, isNowPlaying}: Props) => {
  return (
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
      />
    </View>
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
