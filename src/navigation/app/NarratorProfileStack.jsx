import { createStackNavigator } from '@react-navigation/stack';
import {
  MainScreen,
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
        name='NarratorProfileScreen'
        component={ NarratorProfileScreen }
      />
    </Stack.Navigator>
  );
}
