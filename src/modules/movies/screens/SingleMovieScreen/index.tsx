import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';

import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Alert,
  Image,
} from 'react-native';

import {MoviesStackParams} from '../../models/MoviesStackParams';

import useMovie from '../../hooks/useMovie';

import MoviesActorsCarousel from '../../components/MovieActorsCarousel';
import CustomIonIcon from '../../../../shared/components/CustomIonIcon';

interface Props
  extends StackScreenProps<MoviesStackParams, 'SingleMovieScreen'> {}

const SingleMovieScreen = ({route, navigation}: Props) => {
  const movieId = route.params.movieId.toString() || '';
  const isNowPlaying = route.params.isNowPlaying;

  const {movieByIdQuery, movieActorsByIdQuery} = useMovie(movieId);

  const movie = movieByIdQuery.data;

  if (movieByIdQuery.isFetching) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <ActivityIndicator size={70} color="#FFF" />
      </View>
    );
  }

  if (!movie) {
    Alert.alert('Error', 'Película no encontrada');
    navigation.navigate('MoviesScreen');
    return;
  }

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : null;

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : null;

  const movieGenres = movie.genres.map(movie => movie.name).join('- ');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{gap: 30}}>
          <View>
            {poster ? (
              <Image
                source={{uri: poster}}
                width={Dimensions.get('screen').width}
                height={Dimensions.get('screen').height / 2}
                style={styles.movieImg}
              />
            ) : (
              <View
                style={{
                  width: Dimensions.get('screen').width,
                  height: Dimensions.get('screen').height / 2,
                  borderWidth: 1,
                  borderColor: '#9f9f9f',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomIonIcon name="ban-outline" size={60} color="#9f9f9f" />
              </View>
            )}

            {isNowPlaying && (
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: '#e00101',
                  paddingHorizontal: 14,
                  paddingVertical: 6,
                  borderRadius: 5,
                  right: 10,
                  bottom: 10,
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  En cartelera
                </Text>
              </View>
            )}
          </View>

          <View style={styles.movieContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 28,
                  fontWeight: '700',
                  maxWidth: '75%',
                }}>
                {movie.title}
              </Text>

              {releaseYear && (
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 15,
                    fontWeight: '700',
                    opacity: 0.8,
                    alignSelf: 'flex-start',
                    marginTop: 10,
                  }}>
                  Año: {releaseYear}
                </Text>
              )}
            </View>

            <Text
              style={{
                color: '#FFF',
                fontSize: 16,
                fontWeight: '700',
                opacity: 0.85,
              }}>
              {movieGenres}
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '500',
                marginBottom: 16,
              }}>
              {movie.overview}
            </Text>

            {/* <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Pressable
                style={({pressed}) => ({
                  width: 80,
                  paddingVertical: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: pressed ? 0.8 : 1,
                })}>
                <Text style={{fontSize: 40, color: '#FFF'}}>+</Text>
                <Text style={{fontSize: 15, color: '#FFF', opacity: 0.8}}>
                  Mi lista
                </Text>
              </Pressable>
            </View> */}
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 5,
          }}>
          {movieActorsByIdQuery.isFetching ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size={20} color="#FFF" />
            </View>
          ) : (
            <>
              {movieActorsByIdQuery.data?.cast && (
                <MoviesActorsCarousel actors={movieActorsByIdQuery.data.cast} />
              )}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('screen').height,
    paddingBottom: 100,
  },
  movieImg: {
    objectFit: 'cover',
  },
  movieContainer: {
    paddingHorizontal: 5,
    gap: 14,
  },
});

export default SingleMovieScreen;
