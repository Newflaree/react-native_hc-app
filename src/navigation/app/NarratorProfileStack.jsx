import { createStackNavigator } from '@react-navigation/stack';
import {
  MainScreen,
  ChatScreen,
  NarratorProfileScreen
} from '../../screens/app';


const Stack = createStackNavigator();

export const NarratorProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='MainScreen'
        component={ MainScreen }
      />

      <Stack.Screen
        name='ChatScreen'
        component={ ChatScreen }
      />
    </Stack.Navigator>
  );
}
