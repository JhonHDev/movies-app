import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MovieHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerContainerText}>M</Text>
    </View>
  );
};

export default MovieHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
    paddingTop: 12,
    paddingBottom: 14,
    paddingHorizontal: 5,
    alignItems: 'flex-start',
  },
  headerContainerText: {
    fontSize: 40,
    color: '#e50914',
    fontWeight: '900',
    letterSpacing: 5,
    textTransform: 'uppercase',
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
});
