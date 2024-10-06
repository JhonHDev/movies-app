import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import MoviesStackNavigator from './src/modules/movies/navigation/MoviesStackNavigator';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MoviesStackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
