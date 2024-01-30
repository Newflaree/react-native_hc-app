// React
import { useState } from 'react';
// React Native
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';


export const SetImageNameScreen = () => {
  const [ firstName, setFirstName ] = useState( '' );
  console.log( firstName );

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Elige una foto de perfil
      </Text>

      <View style={ styles.profileImageContainer }> 
        <View style={ styles.profileImage } />
      </View>

      <TextInput
        style={ styles.input }
        placeholder='Nombre'
        value={ firstName }
        onChangeText={ ( text ) => setFirstName( text ) }
      />

      <TouchableOpacity
        style={[ styles.button, { backgroundColor: '#1D3B86' } ]}
      >
        <Text style={ styles.buttonText }>
          Siguiente
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
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 40
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#DDD'
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
    borderRadius: 20,
    padding: 10,
    marginTop: 40
  },
  buttonText:{
    color: 'white',
    textAlign: 'center'
  }
});
