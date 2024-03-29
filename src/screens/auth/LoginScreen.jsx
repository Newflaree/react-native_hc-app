// React Native
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
// Theme
import { colors } from '../../theme';


export const LoginScreen = ({ navigation }) => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Inicio de Sesión
      </Text>

      <View style={ styles.inputsBox }>
        <TextInput
          style={ styles.input }
          placeholder='Correo Electrónico'
          keyboardType='email-address'
        />
      </View>

      <View style={ styles.inputsBox }>
        <TextInput
          style={ styles.input }
          placeholder='Contraseña'
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={ styles.button }
        onPress={ () => navigation.navigate( 'InitSettingNavigator' ) }
      >
        <Text style={ styles.buttonText }>
          Iniciar Sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30
  },
  inputsBox: {
    width: '100%',
    paddingBottom: 30
  },
  input: {
    height: 40,
    width: '100%',
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'transparent'
  },
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 15,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  },
});
