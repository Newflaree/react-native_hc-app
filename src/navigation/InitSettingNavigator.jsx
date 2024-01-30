// React Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import {
  SetImageNameScreen,
  SetLocationScreen,
  SetTagsScreen
} from '../screens/init-configuration';


const Stack = createStackNavigator();

export const InitSettingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
        }
      }}
    >
      <Stack.Screen
        name='SetImageNameScreenScreen'
        component={ SetImageNameScreen }
      />
      <Stack.Screen
        name='SetLocationScreen'
        component={ SetLocationScreen }
      />
      <Stack.Screen
        name='SetTagsScreen'
        component={ SetTagsScreen }
      />
    </Stack.Navigator>
  );
}
