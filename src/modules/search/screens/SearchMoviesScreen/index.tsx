import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import CustomIonIcon from '../../../../shared/components/CustomIonIcon';
import useSearchMovies from '../../hooks/useSearchMovies';
import SearchMovieCard from '../../components/SearchMovieCard';
import useDebounceValue from '../../../../shared/hooks/useDebounceValue';
import CustomHeader from '../../../../shared/components/CustomHeader';

const SearchMoviesScreen = () => {
  const [queryText, setQueryText] = useState<string>('');
  const debounceInputValue = useDebounceValue(queryText);

  const {searchMoviesQuery} = useSearchMovies(debounceInputValue);

  const handleChangeText = (text: string) => {
    if (text.trim().length === 0) {
      return;
    }
    setQueryText(text);
  };

  return (
    <View style={styles.container}>
      <CustomHeader />

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar películas"
          placeholderTextColor="#aaa"
          onChangeText={handleChangeText}
          style={styles.input}
        />

        {searchMoviesQuery.isLoading ? (
          <ActivityIndicator size={26} color="#aaa" />
        ) : (
          <CustomIonIcon name="search" size={26} color="#aaa" />
        )}
      </View>

      {searchMoviesQuery.isLoading || searchMoviesQuery.isFetching ? (
        <View
          style={{
            minHeight: Dimensions.get('screen').height / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={30} color="#FFF" />
        </View>
      ) : (
        <>
          {searchMoviesQuery.data && queryText.trim().length > 0 && (
            <ScrollView
              style={{flex: 1}}
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: 200,
                paddingHorizontal: 5,
                gap: 28,
              }}>
              {searchMoviesQuery.data.map((movie, index) => (
                <SearchMovieCard key={movie.id + '_' + index} movie={movie} />
              ))}
            </ScrollView>
          )}
        </>
      )}
    </View>
  );
};

export default SearchMoviesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Dimensions.get('screen').height,
    backgroundColor: '#000',
    paddingTop: 20,
    paddingHorizontal: 5,
    gap: 14,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141414',
    borderRadius: 5,
    padding: 7,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: 44,
    fontSize: 16,
    color: '#FFF',
  },
});
