import { createStackNavigator } from '@react-navigation/stack';
import {
  BookingScreen,
  CalendarScreen
} from '../../screens/app';

const Stack = createStackNavigator();


export const CalendarStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='CalendarScreen'
        component={ CalendarScreen }
      />

      <Stack.Screen
        name='BookingScreen'
        component={ BookingScreen }
      />
    </Stack.Navigator>
  );
}
