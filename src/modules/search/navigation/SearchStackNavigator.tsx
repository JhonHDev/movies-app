import {createStackNavigator} from '@react-navigation/stack';

import {SearchStackParams} from '../models/SearchStackParams';

import SearchMoviesScreen from '../screens/SearchMoviesScreen';
import MoviesStackNavigator from '../../movies/navigation/MoviesStackNavigator';

const Stack = createStackNavigator<SearchStackParams>();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SearchMoviesScreen" component={SearchMoviesScreen} />

      <Stack.Screen
        name="MoviesStackNavigator"
        component={MoviesStackNavigator}
      />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
