// React
import { useState } from 'react';
// React Native
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { EulaModal } from '../../components/init-config';
// Theme
import { colors } from '../../theme';

export const InitScreen = ({ navigation }) => {
  const [ bottomSheetVisible, setBottomSheetVisible ] = useState( false );

  const handleReadEula = () => {
    setBottomSheetVisible( !bottomSheetVisible );
  }

  return (
    <View style={ styles.container }>
      <Image
        source={ require('../../assets/logo.png') }
        style={ styles.logo }
      />

      <View style={ styles.promotionalTextContainer }>
        <Text style={ styles.promotionalText }> Texto Promocional</Text>
        <Text style={ styles.promotionalText }> Texto Promocional</Text>
      </View>

      <TouchableOpacity 
        style={[ styles.button, { backgroundColor: colors.primary } ]}
        disabled
      >
        <Text style={ styles.buttonText }>
          Continuar con Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[ styles.button, { backgroundColor: colors.primary } ]}
        onPress={ () => navigation.navigate( 'LoginScreen' ) }
      >
        <Text style={ styles.buttonText }>
          Continuar con otro método
        </Text>
      </TouchableOpacity>

      <View style={ styles.separator }>
        <View style={ styles.separatorLine } />
        <Text style={ styles.separatorDot }>•</Text>
        <View style={ styles.separatorLine } />
      </View>

      <TouchableOpacity 
        style={[ styles.button, { backgroundColor: '#1D3B86' } ]}
        onPress={ () => navigation.navigate( 'RegisterScreen' ) }
      >
        <Text style={ styles.buttonText }>
          Crear Cuenta
        </Text>
      </TouchableOpacity>

      <Text style={ styles.eulaText }>
        Al continuar, aceptas nuestros <TouchableOpacity onPress={ handleReadEula }><Text style={ styles.eulaModalText }>Términos y Condiciones</Text></TouchableOpacity>. Conoce cómo procesamos tus datos en nuestra Política de rivacidad y Política de Cookies
      </Text>

      <EulaModal
        isVisible={ bottomSheetVisible }
        onClose={ handleReadEula }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  logo: {
    marginTop: 40,
    width: 150,
    height: 150,
    marginBottom: 20
  },
    promotionalTextContainer: {
    marginBottom: 40
  },
  promotionalText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10
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
  separator: {
    marginHorizontal: 40,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black'
  },
  separatorDot: {
    paddingHorizontal: 5,
    color: 'black',
    fontSize: 20
  },
  eulaText: {
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 50,
    textAlign: 'center',
    color: '#888'
  },
  eulaModalText: {
    color: colors.primary
  }
});
