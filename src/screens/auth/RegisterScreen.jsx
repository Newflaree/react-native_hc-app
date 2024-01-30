import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';


export const RegisterScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Crea tu Cuenta
      </Text>

      <View style={ styles.inputsBox }>
        <TextInput
          style={ styles.input }
          placeholder='Nombre'
        />
      </View>

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

      <View style={ styles.inputsBox }>
        <TextInput
          style={ styles.input }
          placeholder='Repetir Contraseña'
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={ styles.button }
        onPress={ () => console.log( 'Logged' ) }
      >
        <Text style={ styles.buttonText }>
          Crear Cuenta
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
    borderBottomColor: '#1D3B86',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'transparent'
  },
  button: {
    width: '100%',
    backgroundColor: '#1D3B86',
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
