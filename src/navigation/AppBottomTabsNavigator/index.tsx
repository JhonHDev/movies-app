import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MoviesStackNavigator from '../../modules/movies/navigation/MoviesStackNavigator';
import SearchStackNavigator from '../../modules/search/navigation/SearchStackNavigator';
import ProfileStackNavigator from '../../modules/profile/navigation/ProfileStackNavigator';

import CustomIonIcon from '../../shared/components/CustomIonIcon';

const Tab = createBottomTabNavigator();

const AppBottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: '#141414',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#FFFFFF',
      }}>
      <Tab.Screen
        name="MoviesStackNavigator"
        component={MoviesStackNavigator}
        options={{
          title: 'Inicio',
          tabBarIcon: ({color}) => (
            <CustomIonIcon name="home" size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="SearchStackNavigator"
        component={SearchStackNavigator}
        options={{
          title: 'Buscar',
          tabBarIcon: ({color}) => (
            <CustomIonIcon name="search" size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileStackNavigator"
        component={ProfileStackNavigator}
        options={{
          title: 'Perfil',
          tabBarIcon: ({color}) => (
            <CustomIonIcon name="person-outline" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabsNavigator;
