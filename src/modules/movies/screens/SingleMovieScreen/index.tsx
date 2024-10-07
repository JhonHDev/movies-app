import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  Alert,
  Image,
  Pressable,
} from 'react-native';

import useMovie from '../../hooks/useMovie';

import {MoviesStackParams} from '../../models/MoviesStackParams';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import MovieActorCard from '../../components/MovieActorCard';
import MoviesActorsCarousel from '../../components/MovieActorsCarousel';

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

  const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const movieGenres = movie.genres.map(movie => movie.name).join('- ');
  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}>
      <StatusBar backgroundColor="#000" />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={{gap: 30}}>
          <View>
            <Image
              source={{uri: poster}}
              width={Dimensions.get('screen').width}
              height={Dimensions.get('screen').height / 2}
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

            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              {movie.overview}
            </Text>

            <View
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
            </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('screen').height,
    paddingBottom: 40,
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
