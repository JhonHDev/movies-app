import React from 'react';

import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const SearchMoviesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <Text
          style={{
            color: '#FFF',
          }}>
          SearchMoviesScreen
        </Text>
      </View>
    </ScrollView>
  );
};

export default SearchMoviesScreen;

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('screen').height,
    backgroundColor: '#000',
  },
  searchContainer: {
    gap: 14,
    paddingBottom: 80,
  },
});
