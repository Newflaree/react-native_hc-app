import { createStackNavigator } from '@react-navigation/stack';
import {
  BookingConfirmScreen,
  CalendarScreen,
  ChatScreen,
  ChatsScreen
} from '../../screens/app';

const Stack = createStackNavigator();


export const MessagesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='ChatsScreen'
        component={ ChatsScreen }
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
