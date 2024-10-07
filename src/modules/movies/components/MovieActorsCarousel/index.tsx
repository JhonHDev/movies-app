import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Cast} from '../../models/MovieActorsByIdResponse';
import MovieActorCard from '../MovieActorCard';

interface Props {
  actors: Cast[];
}

const MoviesActorsCarousel = ({actors}: Props) => {
  return (
    <View>
      <Text style={styles.carosuelTitle}>Actores</Text>

      <FlatList
        data={actors}
        renderItem={({item}) => <MovieActorCard actor={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MoviesActorsCarousel;

const styles = StyleSheet.create({
  carosuelTitle: {
    flex: 1,
    paddingVertical: 20,
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
