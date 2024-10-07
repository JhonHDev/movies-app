import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {Cast} from '../../models/MovieActorsByIdResponse';

interface Props {
  actor: Cast;
}

const MovieActorCard = ({actor}: Props) => {
  const poster = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

  const goToSeeActorDetails = () => {};

  return (
    <Pressable
      onPress={goToSeeActorDetails}
      style={({pressed}) => ({
        opacity: pressed ? 0.8 : 1,
        marginRight: 20,
      })}>
      <View style={styles.movieContainer}>
        <Image
          source={{uri: poster}}
          width={130}
          height={160}
          style={styles.movieImg}
        />
      </View>
    </Pressable>
  );
};

export default MovieActorCard;

const styles = StyleSheet.create({
  movieContainer: {
    flex: 1,
  },

  movieImg: {
    flex: 1,
    objectFit: 'cover',
    borderRadius: 14,
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});
