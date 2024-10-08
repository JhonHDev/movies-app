import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {Movie} from '../../models/Movies';
import {MoviesStackParams} from '../../models/MoviesStackParams';

interface Props {
  movie: Movie;
  isNowPlaying?: boolean;
}

const MovieCard = ({movie, isNowPlaying}: Props) => {
  const navigation = useNavigation<NavigationProp<MoviesStackParams>>();

  const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const goToSeeMovieDetails = () => {
    navigation.navigate('SingleMovieScreen', {
      movieId: movie.id,
      isNowPlaying,
    });
  };

  return (
    <Pressable
      onPress={goToSeeMovieDetails}
      style={({pressed}) => ({
        opacity: pressed ? 0.8 : 1,
        marginRight: 20,
      })}>
      <View style={styles.movieContainer}>
        <Image
          source={{uri: poster}}
          width={isNowPlaying ? 200 : 150}
          height={isNowPlaying ? 300 : 180}
          style={styles.movieImg}
        />

        {isNowPlaying && (
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#e00101',
              paddingHorizontal: 14,
              paddingVertical: 6,
              borderRadius: 5,
              right: 10,
              bottom: 20,
            }}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              En cartelera
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  movieContainer: {
    flex: 1,
  },

  movieImg: {
    flex: 1,
    objectFit: 'cover',
    borderRadius: 10,
  },
});
