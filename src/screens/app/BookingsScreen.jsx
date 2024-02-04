// React Native
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Components
import { Header } from '../../components/app';
// Theme
import { colors } from '../../theme';


const bookingsData = [
  { id: 5, username: 'Narrator-1', date: '2024-02-22', payButton: true, status: 'yellow' },
  { id: 1, username: 'Narrator-1', date: '2024-02-14', payButton: false, status: 'green' },
  { id: 4, username: 'Narrator-1', date: '2024-03-07', payButton: false, status: 'gray' },
  { id: 3, username: 'Narrator-1', date: '2024-07-20', payButton: false, status: 'red' },
];

const BookingItem = ({ item, navigation }) => {
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
            <TouchableOpacity style={ styles.payButton }>
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
          item.status === 'red' && <Text>Cancelada</Text>
        }
      </View>

      <View style={[ styles.statusDot, { backgroundColor: item.status } ]}>
      </View>
    </View>
  );
}

export const BookingsScreen = () => {
  const { top } = useSafeAreaInsets();

  const renderItem = ({ item }) => (
    <BookingItem
      item={ item }
    />
  );

  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <Header screenName='Reservas' />

      <View style={ styles.content }>
        <Text style={ styles.titleScreen }>
          Agenda y pagos
        </Text>

        <View style={ styles.inputContainer }>
          <TextInput
            style={ styles.textInput }
            placeholder='Buscar Agenda'
          />

          <Icon
            style={ styles.inputIcon }
            name='search'
            size={ 20 }
            color='#ccc'
          />

        </View>
      </View>

      {
        bookingsData.length > 1
          ? <FlatList
              data={ bookingsData }
              keyExtractor={ ( item ) => item.id.toString() }
              renderItem={ renderItem }
            />
          : <View style={ styles.emptyBooking }>
              <Text style={ styles.emptyBookingText }>
                No hay horas agendadas ni pendiented de pago
              </Text>
            </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20
  },
  titleScreen: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20
  },
  emptyBooking: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyBookingText: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 30
  },
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    justifyContent: 'space-between',
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
    height: 20,
    width: 20,
    backgroundColor: 'yellow',
    borderRadius: 50,
    bottom: 20
  }
})
