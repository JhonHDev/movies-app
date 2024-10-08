import React from 'react';

import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';

import {Pressable, StyleSheet, Text, View} from 'react-native';

import {AppDrawerParams} from 'src/shared/models/AppDrawerParams';

const CustomHeader = () => {
  const navigation = useNavigation<NavigationProp<AppDrawerParams>>();

  const toggleOpenDraweMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Pressable onPress={toggleOpenDraweMenu}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContainerText}>M</Text>
      </View>
    </Pressable>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
    paddingTop: 20,
    paddingBottom: 5,
    paddingHorizontal: 5,
    alignItems: 'flex-start',
  },
  headerContainerText: {
    fontSize: 40,
    color: '#e50914',
    fontWeight: '900',
    letterSpacing: 5,
    textTransform: 'uppercase',
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
});
