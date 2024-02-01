// React Native
import {
  StyleSheet,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Components
import { Header } from '../../components/app';


export const CalendarScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <Header screenName='Calendario' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
