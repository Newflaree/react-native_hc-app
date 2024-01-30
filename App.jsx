import { Text, View } from 'react-native';
import { InitScreen, LoginScreen, RegisterScreen } from './src/screens/auth';
import { SetLocationScreen, SetImageNameScreen, SetTagsScreen } from './src/screens/init-configuration';

const App = () => {
  return (
    <SetLocationScreen />
  );
}

export default App;
