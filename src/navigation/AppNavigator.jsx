// React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import {
  CalendarScreen,
  ChatsScreen,
  FavoritesScreen,
  MainScreen,
  ProfileScreen
} from '../screens/app';


const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='MainScreen'
    >
      <Tab.Screen
        name='FavoritesScreen'
        component={ FavoritesScreen }
      />

      <Tab.Screen
        name='ChatsScreen'
        component={ ChatsScreen }
      />

      <Tab.Screen
        name='MainScreen'
        component={ MainScreen }
      />

      <Tab.Screen
        name='CalendarScreen'
        component={ CalendarScreen }
      />

      <Tab.Screen
        name='ProfileScreen'
        component={ ProfileScreen }
      />
    </Tab.Navigator>
  );
}
