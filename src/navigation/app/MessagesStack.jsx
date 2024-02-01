import { createStackNavigator } from '@react-navigation/stack';
import {
  ChatsScreen,
  ChatScreen
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
    </Stack.Navigator>
  );
}
