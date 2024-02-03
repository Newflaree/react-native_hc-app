// React Native
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Components
import { BookingConfirmHeader } from '../../components/app/headers';


export const BookingConfirmScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <BookingConfirmHeader
        navigation={ navigation }
      />

      <View style={ styles.content }>
        <Text style={ styles.title }>¡Hora Solicitada!</Text>
        <Text style={ styles.parraph }>Ahora estamos a la espera de la confirmación del locutor para efectuar el pago</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 36,
    paddingBottom: 20
  },
  parraph: {
    fontSize: 18,
    textAlign: 'center'
  }
});
