import {createStackNavigator} from '@react-navigation/stack';

import {MoviesStackParams} from '../models/MoviesStackParams';

import MoviesScreen from '../screens/MoviesScreen';
import SingleMovieScreen from '../screens/SingleMovieScreen';

const Stack = createStackNavigator<MoviesStackParams>();

const MoviesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
      <Stack.Screen name="SingleMovieScreen" component={SingleMovieScreen} />
    </Stack.Navigator>
  );
};

export default MoviesStackNavigator;
