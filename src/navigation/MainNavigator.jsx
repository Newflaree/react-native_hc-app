// React Native
import { createStackNavigator } from '@react-navigation/stack';
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
          backgroundColor: 'white'
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
    </Stack.Navigator>
  );
}
