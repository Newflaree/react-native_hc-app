// React Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import {
  BookingConfirmScreen,
  ChatScreen,
  CalendarScreen,
  MainScreen
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

      <Stack.Screen
        name='CalendarScreen'
        component={ CalendarScreen }
      />

      <Stack.Screen
        name='BookingConfirmScreen'
        component={ BookingConfirmScreen }
      />
    </Stack.Navigator>
  );
}
