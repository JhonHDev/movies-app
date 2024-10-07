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
            elevation: 0,
            backgroundColor: '#000',
            shadowColor: 'transparent',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
          },
          headerTitle: '',
          headerBackTitle: ' ',
        }}
      />
    </Stack.Navigator>
  );
};

export default MoviesStackNavigator;
