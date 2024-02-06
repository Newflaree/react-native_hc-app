import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigation';
import { AuthProvider } from './src/context';


const AppState = ({ children }) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MainNavigator />
      </AppState>
    </NavigationContainer>
  );
}

export default App;
