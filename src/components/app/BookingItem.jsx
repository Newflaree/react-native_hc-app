// React Native
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// Theme
import { colors } from '../../theme';


export const BookingItem = ({ item, navigation }) => {
  const formatDate = ( dateString ) => {
    const date = new Date( dateString );

    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril',
      'Mayo', 'Junio', 'Julio', 'Agosto',
      'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const day = date.getDate();
    const month = months[ date.getMonth() ];
    const year = date.getFullYear();

    const formatedDate = `${ day } de ${ month }, ${ year }`;

    return formatedDate;
  }

  return (
    <View
      style={ styles.bookingItem }
    >
      <Image 
        style={ styles.avatar }
        source={{ uri: 'https://res.cloudinary.com/newflare/image/upload/v1705381326/demos/hc/hsjnbgecbaaijmftf0vi.png' }}
      />

      <View style={ styles.bookingInfo }>
        <Text style={ styles.username }>
          { item.username }
        </Text>

        <Text style={ styles.itemDate }>
          { formatDate( item.date ) }
        </Text>
        {
          item.payButton && 
            <TouchableOpacity
              style={ styles.payButton }
              onPress={ () => console.log( 'Following Pay' ) }
            >
              <Text style={ styles.payButtonText }>
                Pagar
              </Text>
            </TouchableOpacity>
        }

        {
          item.status === 'green' && <Text>Pagada</Text>
        }
        {
          item.status === 'gray' && <Text>Confirmada</Text>
        }
        {
          item.status === 'lightgray' && <Text>Concretada</Text>
        }
        {
          item.status === 'red' && <Text>Cancelada</Text>
        }
      </View>

      <View style={[ styles.statusDot, { backgroundColor: item.status } ]}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: '#FFF',
    padding: 10,
    elevation: 2,
    marginHorizontal: 16
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  bookingInfo: {
    flex: 1
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  itemDate: {
    fontSize: 14,
    marginBottom: 10
  },
  textInput: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    width: '100%',
  },
  inputIcon: {
    position: 'absolute',
    right: 35
  },
  payButton: {
    padding: 4,
    width: 100,
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  payButtonText: {
    color: '#FFF',
    textAlign: 'center'
  },
  statusDot: {
    height: 25,
    width: 25,
    borderRadius: 50,
    bottom: 20
  }
});
