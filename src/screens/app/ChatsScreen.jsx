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
// Colors
import { colors } from '../../theme';
// Components
import { Header } from '../../components/app';


const chatsData = [
  { id: 1, username: 'User 1', lastMessage: 'Hola, ¿cómo estás?', unreadMessages: 3 },
  { id: 2, username: 'User 2', lastMessage: 'Vamos a quedar mañana', unreadMessages: 0 },
  { id: 3, username: 'User 3', lastMessage: 'No tengo disponible la fecha que deseas', unreadMessages: 1 }
]


const ChatItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={ styles.chatItem }
      onPress={ () => navigation.navigate( 'ChatScreen' ) }
    >
      <Image 
        style={ styles.avatar }
        source={{ uri: 'https://res.cloudinary.com/newflare/image/upload/v1705381326/demos/hc/hsjnbgecbaaijmftf0vi.png' }}
      />

      <View style={ styles.chatInfo }>
        <Text style={ styles.username }>
          { item.username }
        </Text>

        <Text
          numberOfLines={ 1 }
          style={ styles.lastMessage }
        >
          { item.lastMessage }
        </Text>

        {
          item.unreadMessages > 0 && (
            <View style={ styles.unreadBadge }>
              <Text style={ styles.unreadText }>
                { item.unreadMessages }
              </Text>
            </View>
          )
        }
      </View>
    </TouchableOpacity>
  )
}

export const ChatsScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();

  const renderItem = ({ item }) => (
    <ChatItem item={ item } navigation={ navigation } />
  );

  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <Header screenName='Mensajes' />

      <View style={ styles.inputContainer }>
        <TextInput
          style={ styles.textInput }
          placeholder='Buscar Chat'
        />

        <Icon
          style={ styles.inputIcon }
          name='search'
          size={ 20 }
          color='#ccc'
        />
      </View>

      {
        chatsData.length > 1
          ? <FlatList
              data={ chatsData }
              keyExtractor={ ( item ) => item.id.toString() }
              renderItem={ renderItem }
            />
          : <View style={ styles.emptyChat }>
              <Text style={ styles.emptyChatTitle }>Comienza a conocer</Text>
              <Text style={ styles.emptyChatText }>Aquí encontrarás los locutores que te interese contactar</Text>
            </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: '#FFF',
    padding: 20,
    elevation: 2,
    marginHorizontal: 16
  },
  emptyChat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyChatTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  emptyChatText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 32
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  chatInfo: {
    flex: 1
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  lastMessage: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4
  },
  unreadBadge: {
    backgroundColor: colors.error,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-end',
    position: 'absolute'
  },
  unreadText: {
    color: '#FFF',
    fontWeight: 'bold'
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
  }
});
