import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import CustomHeader from '../../../shared/components/CustomHeader';
import SearchMoviesScreen from '../screens/SearchMoviesScreen';

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <CustomHeader />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="SearchMoviesScreen"
          component={SearchMoviesScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default SearchStackNavigator;
