import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MoviesStackNavigator from './src/modules/movies/navigation/MoviesStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MoviesStackNavigator />
    </NavigationContainer>
  );
};

export default App;
