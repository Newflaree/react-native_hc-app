// React
import { useContext, useEffect } from 'react';
// React Native
import {
  Alert,
  StyleSheet,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
// Context
import { AuthContext } from '../../context';
// Hooks
import { useForm } from '../../hooks';
// Theme
import { colors } from '../../theme';


export const LoginScreen = ({ navigation }) => {
  const {
    signIn,
    errorMessage,
    removeError
  } = useContext( AuthContext );

  const {
    email,
    password,
    onChange
  } = useForm({
    email: '',
    password: ''
  });

  useEffect( () => {
    if ( errorMessage.length === 0 ) return;

    Alert.alert( 'Error al iniciar sesión', errorMessage, [{
      text: 'Ok',
      onPress: () => removeError() 
    }]);

  }, [ errorMessage ] );

  const handleLogin = () => {
    console.log({ email, password });
    Keyboard.dismiss();

    signIn({ email, password });
  }

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
          onChangeText={ ( value ) => onChange( value, 'email' ) }
          value={ email }
          onSubmitEditing={ handleLogin }
        />
      </View>

      <View style={ styles.inputsBox }>
        <TextInput
          style={ styles.input }
          placeholder='Contraseña'
          secureTextEntry
          onChangeText={ ( value ) => onChange( value, 'password' ) }
          value={ password }
          onSubmitEditing={ handleLogin }
        />
      </View>

      <TouchableOpacity
        style={ styles.button }
        onPress={ handleLogin }
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
