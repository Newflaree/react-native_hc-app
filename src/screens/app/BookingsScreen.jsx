// React Native
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Components
import { Header } from '../../components/app';


export const BookingsScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <Header screenName='Reservas' />
      <Text>BookingScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
