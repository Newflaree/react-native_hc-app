// React Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import {
  FavoritesScreen,
  BookingConfirmScreen,
  ChatScreen,
  CalendarScreen,
} from '../../screens/app';


const Stack = createStackNavigator();


export const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='FavoritesScreen'
        component={ FavoritesScreen }
      />

      <Stack.Screen
        name='BookingConfirmScreen'
        component={ BookingConfirmScreen }
      />

      <Stack.Screen
        name='ChatScreen'
        component={ ChatScreen }
      />

      <Stack.Screen
        name='CalendarScreen'
        component={ CalendarScreen }
      />
    </Stack.Navigator>
  );
}
