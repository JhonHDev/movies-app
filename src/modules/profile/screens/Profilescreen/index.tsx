import React from 'react';
import {
  Dimensions,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import CustomHeader from '../../../../shared/components/CustomHeader';
import CustomIonIcon from '../../../../shared/components/CustomIonIcon';

const ProfilesScreen = () => {
  const handleCloseAuthSession = () => {
    console.log('close session');
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000" />

      <CustomHeader />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.defaultProfileImg}>
            <CustomIonIcon size={40} name="person-outline" color="#000" />
          </View>

          <View style={styles.profileDetails}>
            <View
              style={{
                gap: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 22,
                  fontWeight: 'bold',
                }}>
                Pepito Perez
              </Text>

              <Text
                style={{
                  color: '#CCC',
                  fontSize: 16,
                }}>
                pepito@gmail.com
              </Text>
            </View>

            <Pressable
              onPress={handleCloseAuthSession}
              style={({pressed}) => ({
                opacity: pressed ? 0.85 : 1,
                width: Dimensions.get('screen').width - 140,
                height: 44,
                borderRadius: 4,
                backgroundColor: '#F4F4F4',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              })}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 15,
                  fontWeight: '400',
                }}>
                Cerrar sesión
              </Text>

              <CustomIonIcon size={22} name="log-out-outline" color="#000" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilesScreen;

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('screen').height,
    backgroundColor: '#000',
  },
  profileContainer: {
    gap: 14,
    paddingBottom: 80,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultProfileImg: {
    width: 120,
    height: 120,
    backgroundColor: '#CCC',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileDetails: {
    marginTop: 24,
    gap: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
