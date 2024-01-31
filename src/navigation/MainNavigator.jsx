// React Native
import { createStackNavigator } from '@react-navigation/stack';
// Navigators
import {
  AppNavigator,
  InitSettingNavigator
} from '../navigation';
// Screens
import {
  InitScreen,
  LoginScreen,
  RegisterScreen
} from '../screens/auth';


const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
        }
      }}
    >
      <Stack.Screen
        name='InitScreen'
        component={ InitScreen }
      />

      <Stack.Screen
        name='LoginScreen'
        component={ LoginScreen }
      />

      <Stack.Screen
        name='RegisterScreen'
        component={ RegisterScreen }
      />

      <Stack.Screen
        name='InitSettingNavigator'
        component={ InitSettingNavigator }
      />

      <Stack.Screen
        name='AppNavigator'
        component={ AppNavigator }
      />
    </Stack.Navigator>
  );
}
