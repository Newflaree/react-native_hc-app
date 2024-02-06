import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// 
import { colors } from '../../theme';


export const ChatItem = ({ item, navigation }) => {
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

const styles = StyleSheet.create({
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
});
