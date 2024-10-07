import {createStackNavigator} from '@react-navigation/stack';

import {MoviesStackParams} from '../models/MoviesStackParams';

import MoviesScreen from '../screens/MoviesScreen';
import SingleMovieScreen from '../screens/SingleMovieScreen';

const Stack = createStackNavigator<MoviesStackParams>();

const MoviesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoviesScreen"
        component={MoviesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingleMovieScreen"
        component={SingleMovieScreen}
        options={{
          headerStyle: {
            backgroundColor: '#000',
            borderBottomWidth: 0,
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff',
          },
          headerTitle: '',
          headerBackTitle: ' ',
        }}
      />
    </Stack.Navigator>
  );
};

export default MoviesStackNavigator;
