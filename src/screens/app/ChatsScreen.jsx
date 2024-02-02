// React Native
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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

      <FlatList
        data={ chatsData }
        keyExtractor={ ( item ) => item.id.toString() }
        renderItem={ renderItem }
      />
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
    marginHorizontal: 10
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
  }
});
