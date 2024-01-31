// React Native
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
// React Native Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme';

export const SetLocationScreen = ({ navigation }) => {
  const handleAllowLocation = () => {
    // TODO: Logic to allow my location
    navigation.navigate( 'AppNavigator' );
  }

  const handleLearMore = () => {
    // TODO: Logic to open Learn More modal
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        ¿Eres de por aquí?
      </Text>

      <Text style={ styles.paragraph }>
        Compártenos tu ubicación para ayudarte a encontrar al relator indicado. Si no, no podrás hacer match con nadie.
      </Text>

      <View style={ styles.locationIconContainer }>
        <Icon
          name='location-on'
          size={ 60 }
          color='#FFF'
        />
      </View>

      <TouchableOpacity
        style={ styles.button }
        onPress={ handleAllowLocation }
      >
        <Text style={ styles.buttonText }>
          Permitir
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={ styles.learnMoreText }>¿Cómo se usa mi ubicación?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginButton: 20
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 20
  },
  locationIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginVertical: 40
  },
  locationIcon: {
    width: 50,
    height: 50
  },
  learnMoreText: {
    color: colors.primary,
    marginTop: 20,
    textDecorationLine: 'underline'
  },
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 15,
    marginTop: 10,
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  }
});
