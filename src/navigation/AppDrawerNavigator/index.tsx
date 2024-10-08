import {View} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {AppDrawerParams} from '../../shared/models/AppDrawerParams';

import AppBottomTabsNavigator from '../AppBottomTabsNavigator';
import CustomIonIcon from '../../shared/components/CustomIonIcon';

const Drawer = createDrawerNavigator<AppDrawerParams>();

const CustomDrawerMenu = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: '#000',
      }}>
      <View
        style={{
          backgroundColor: '#000',
          gap: 10,
          paddingVertical: 40,
        }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerMenu {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#141414',
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#FFF',
        drawerLabelStyle: {
          fontSize: 18,
          fontWeight: '500',
          marginLeft: -13,
        },
        drawerItemStyle: {
          marginHorizontal: 24,
          paddingHorizontal: 20,
        },
      }}>
      <Drawer.Screen
        name="AppBottomTabsNavigator"
        component={AppBottomTabsNavigator}
        options={{
          title: 'Inicio',
          drawerIcon: ({color}) => (
            <CustomIonIcon name="home" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
