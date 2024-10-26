import {createStackNavigator} from '@react-navigation/stack';
import ProfilesScreen from '../screens/Profilescreen';

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#000',
        },
      }}>
      <Stack.Screen name="ProfilesScreen" component={ProfilesScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
