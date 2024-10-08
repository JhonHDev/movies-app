import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import AppDrawerNavigator from './src/navigation/AppDrawerNavigator';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppDrawerNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
