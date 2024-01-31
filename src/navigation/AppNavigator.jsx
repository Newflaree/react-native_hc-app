// React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// React Native Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
// Screens
import {
  CalendarScreen,
  ChatsScreen,
  FavoritesScreen,
  MainScreen,
  ProfileScreen
} from '../screens/app';
// Colors
import { colors } from '../theme';


const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='MainScreen'
    >
      <Tab.Screen
        name='FavoritesScreen'
        component={ FavoritesScreen }
        options={{
          title: '',
          tabBarIcon: () => <Icon
            name='star'
            size={ 30 }
            color={ colors.primary }
          />
        }}
      />

      <Tab.Screen
        name='ChatsScreen'
        component={ ChatsScreen }
        options={{
          title: '',
          tabBarIcon: () => <Icon
            name='chat'
            size={ 30 }
            color={ colors.primary }
          />
        }}
      />

      <Tab.Screen
        name='MainScreen'
        component={ MainScreen }
        options={{
          title: '',
          tabBarIcon: () => <Icon
            name='home'
            size={ 30 }
            color={ colors.primary }
          />
        }}
      />

      <Tab.Screen
        name='CalendarScreen'
        component={ CalendarScreen }
        options={{
          title: '',
          tabBarIcon: () => <Icon
            name='event'
            size={ 30 }
            color={ colors.primary }
          />
        }}
      />

      <Tab.Screen
        name='ProfileScreen'
        component={ ProfileScreen }
        options={{
          title: '',
          tabBarIcon: () => <Icon
            name='person'
            size={ 30 }
            color={ colors.primary }
          />
        }}
      />
    </Tab.Navigator>
  );
}
