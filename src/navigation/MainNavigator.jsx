// React
import { useContext, useEffect } from 'react';
// React Native
import { createStackNavigator } from '@react-navigation/stack';
// Context
import { AuthContext } from '../context';
// Navigators
import {
  AppNavigator,
  InitSettingNavigator
} from '../navigation';
// Screens
import {
  InitScreen,
  LoginScreen,
  RegisterScreen
} from '../screens/auth';


const Stack = createStackNavigator();

export const MainNavigator = () => {
  const { status, user, token } = useContext( AuthContext )

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
        }
      }}
    >
      {
        ( status !== 'authenticared' )
          ? <>
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
            </>
          : <>
              <Stack.Screen
                name='InitSettingNavigator'
                component={ InitSettingNavigator }
              />

              <Stack.Screen
                name='AppNavigator'
                component={ AppNavigator }
              />
            </>
          }
      </Stack.Navigator>
  );
}
