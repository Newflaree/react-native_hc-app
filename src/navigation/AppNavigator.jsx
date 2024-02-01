// React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// React Native Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
// Natigators
import {
  NarratorProfileStack,
  MessagesStack
} from '../navigation/app';
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
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName='NarratorProfileStack'
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          backgroundColor: '',
          elevation: 0,
        }
      }}
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
            style={{ marginTop: 8 }}
          />
        }}
      />

      <Tab.Screen
        name='MessagesStack'
        component={ MessagesStack }
        options={{
          title: '',
          tabBarIcon: () => <Icon
            name='chat'
            size={ 30 }
            color={ colors.primary }
            style={{ marginTop: 8 }}
          />
        }}
      />

      <Tab.Screen
        name='NarratorProfileStack'
        component={ NarratorProfileStack }
        options={{
          title: '',
          tabBarIcon: () => <Icon
            name='home'
            size={ 30 }
            color={ colors.primary }
            style={{ marginTop: 8 }}
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
            style={{ marginTop: 8 }}
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
            style={{ marginTop: 8 }}
          />
        }}
      />
    </Tab.Navigator>
  );
}
