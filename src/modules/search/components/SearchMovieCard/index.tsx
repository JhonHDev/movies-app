import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {MovieSearchResult} from '../../models/SearchMoviesReponse';

import {SearchStackParams} from '../../models/SearchStackParams';
import CustomIonIcon from '../../../../shared/components/CustomIonIcon';

interface Props {
  movie: MovieSearchResult;
}

const SearchMovieCard = ({movie}: Props) => {
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : null;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : null;

  const navigation = useNavigation<NavigationProp<SearchStackParams>>();

  const goToSeeMovieDetails = () => {
    navigation.navigate('MoviesStackNavigator', {
      screen: 'SingleMovieScreen',
      params: {
        movieId: movie.id,
      },
    } as any);
  };

  return (
    <Pressable onPress={goToSeeMovieDetails}>
      <View
        style={{
          flexDirection: 'row',
          gap: 16,
        }}>
        {poster ? (
          <Image source={{uri: poster}} width={100} height={100} />
        ) : (
          <View
            style={{
              width: 100,
              height: 100,
              borderWidth: 1,
              borderColor: '#9f9f9f',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomIonIcon name="ban-outline" size={30} color="#9f9f9f" />
          </View>
        )}

        <View
          style={{
            gap: 10,
            width: '100%',
            maxWidth: 200,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 16,
              fontWeight: '600',
            }}
            ellipsizeMode="tail"
            numberOfLines={2}>
            {movie.title}
          </Text>

          {releaseYear && <Text style={{color: '#FFF'}}>{releaseYear}</Text>}
        </View>
      </View>
    </Pressable>
  );
};

export default SearchMovieCard;

const styles = StyleSheet.create({});
