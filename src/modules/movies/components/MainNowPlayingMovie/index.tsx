import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {NowPlayingMovie} from '../../models/NowPlayingMoviesResponse';
import {MoviesStackParams} from '../../models/MoviesStackParams';

interface Props {
  mainMovie: NowPlayingMovie;
  isFetching: boolean;
}

const MainNowPlayingMovie = ({isFetching, mainMovie}: Props) => {
  const navigation = useNavigation<NavigationProp<MoviesStackParams>>();

  const releaseYear = new Date(mainMovie.release_date).getFullYear();
  const poster = `https://image.tmdb.org/t/p/w500/${mainMovie.poster_path}`;

  const goToSeeMovieDetails = () => {
    navigation.navigate('SingleMovieScreen', {movieId: mainMovie.id});
  };

  if (isFetching) {
    return (
      <View>
        <Text style={{color: 'white'}}>CARGANDO...</Text>
      </View>
    );
  }

  return (
    <View style={styles.movieContainer}>
      <Image
        source={{uri: poster}}
        width={Dimensions.get('screen').width - 40}
        height={450}
        style={styles.movieImg}
      />

      <View style={styles.movieDetailsContainer}>
        <View style={styles.movieDetails}>
          <Text style={styles.movieDetailText}>{mainMovie.original_title}</Text>

          <Text style={styles.movieDetailText}>-</Text>

          <Text style={styles.movieDetailText}>{releaseYear}</Text>
        </View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}>
          <Pressable
            onPress={goToSeeMovieDetails}
            style={({pressed}) => ({
              ...styles.movieButton,
              opacity: pressed ? 0.8 : 1,
            })}>
            <Text style={styles.movieButtonText}>Ver más</Text>
          </Pressable>

          <Pressable
            style={({pressed}) => ({
              ...styles.movieButton2,
              opacity: pressed ? 0.8 : 1,
            })}>
            <Text style={styles.movieButtonText2}>Mi lista</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MainNowPlayingMovie;

const styles = StyleSheet.create({
  movieContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  movieImg: {
    borderRadius: 10,
    objectFit: 'cover',
  },
  movieDetailsContainer: {
    position: 'absolute',
    bottom: 55,
    gap: 14,
  },
  movieDetails: {
    flexDirection: 'row',
    gap: 10,
    paddingLeft: 35,
  },
  movieDetailText: {
    color: 'white',
    fontWeight: '500',
  },
  movieButton: {
    width: 150,
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  movieButton2: {
    width: 150,
    backgroundColor: '#c9c9c98c',

    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieButtonText2: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
