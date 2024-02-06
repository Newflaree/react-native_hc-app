// React Native
import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Components
import {
  BookingItem,
  Header
} from '../../components/app';


const bookingsPayiedData = [
  { id: 6, username: 'Narrator-1', date: '2024-04-02', payButton: false, status: 'green' },
  { id: 1, username: 'Narrator-1', date: '2024-02-14', payButton: false, status: 'green' },
];

const bookingsPendingData = [
  { id: 5, username: 'Narrator-1', date: '2024-02-22', payButton: true, status: 'yellow' },
  { id: 2, username: 'Narrator-1', date: '2024-03-11', payButton: true, status: 'yellow' },
];

const bookingsPreviousData = [
  { id: 6, username: 'Narrator-1', date: '2024-04-02', payButton: false, status: 'lightgray' },
  { id: 1, username: 'Narrator-1', date: '2024-02-14', payButton: false, status: 'lightgray' },
  { id: 4, username: 'Narrator-1', date: '2024-03-07', payButton: false, status: 'lightgray' },
]

export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <Header screenName='Perfil' />

      <ScrollView style={ styles.content }>
        <Text style={ styles.profileTitle }>
          Perfil
        </Text>

        <View style={ styles.profileImageContainer }>
          <Image
            style={ styles.profileImage }
            source={{ uri: 'https://res.cloudinary.com/newflare/image/upload/v1705381326/demos/hc/hsjnbgecbaaijmftf0vi.png' }}
          />
        </View>

        <Text style={ styles.userName }>
          Test 1
        </Text>

        <View style={ styles.nextBookingContainer }>
          <Text style={ styles.nextBookingTitle }>
            Próximas citas
          </Text>

          {
            bookingsPayiedData.length > 0
              ? bookingsPayiedData.map( (item) => (
                  <BookingItem item={ item } />
                )) 
              : <View style={ styles.emptyItems }>
                  <Text>
                    No tienes próximas citas
                  </Text>
                </View>
          }
        </View>

        <View style={ styles.outstandingContainer }>
          <Text style={ styles.outstandingTitle }>
            Pendientes de pago
          </Text>

          {
            bookingsPendingData.length > 0
              ? bookingsPendingData.map( (item) => (
                  <BookingItem item={ item } />
                )) 
              : <View style={ styles.emptyItems }>
                  <Text>
                    No tienes citas pendientes de pago
                  </Text>
                </View>
          }
        </View>

        <View style={ styles.latestChatsContainer }>
          <Text style={ styles.latestChatsTitle }>
            Últimas citas
          </Text>

          {
            bookingsPreviousData.length > 0
              ? bookingsPreviousData.map( (item) => (
                  <BookingItem item={ item } />
                )) 
              : <View style={ styles.emptyItems }>
                  <Text>
                    No tienes próximas citas anteriores
                  </Text>
                </View>
          }
        </View>
      </ScrollView>
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
  profileTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingVertical: 15
  },
  profileImageContainer: {
    position: 'relative',
    alignItems: 'center'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  userName: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 20
  },
  nextBookingContainer: {
    paddingBottom: 16
  },
  nextBookingTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  outstandingContainer: {
    paddingBottom: 16
  },
  outstandingTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  latestChatsContainer: {
    paddingBottom: 16
  },
  latestChatsTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  emptyItems: {
    height: 60,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
