// React
import {
  useState
} from 'react';
// React Native
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Colors
import { colors } from '../../theme';
// Components
import { ChatHeader } from '../../components/app/headers';


/*
  * */
const messagesData = [
  { id: 1, sender: 'Usuario 1', text: 'Hola buen día ¿cómo estás?' },
  { id: 2, sender: 'Usuario 2', text: 'Todo bien, un gusto que conectemos' },
  { id: 3, sender: 'Usuario 1', text: 'Hola buen día ¿cómo estás?' },
  { id: 4, sender: 'Usuario 2', text: 'Todo bien, un gusto que conectemos' },
  { id: 5, sender: 'Usuario 1', text: 'Hola buen día ¿cómo estás?' },
  { id: 6, sender: 'Usuario 2', text: 'Todo bien, un gusto que conectemos' },
  { id: 7, sender: 'Usuario 1', text: 'Hola buen día ¿cómo estás?' }
];

const renderItem = ({ item }) => (

  <View
    style={
      item.sender === 'Usuario 1'
        ? styles.senderContainer
        : styles.receiverContainer
    }
  >
  {

      item.sender === 'Usuario 2' &&
            <Image
              source={{ uri: 'https://res.cloudinary.com/newflare/image/upload/v1705381326/demos/hc/hsjnbgecbaaijmftf0vi.png' }}
              style={ styles.chatAvatar }
            />

  }
    <View
      style={
        item.sender === 'Usuario 1'
          ? styles.senderMessage
          : styles.receiverMessage 
      }
    >
      <Text style={ styles.messageText }>
              { item.text }
      </Text>
    </View>
  </View>
);


export const ChatScreen = ({ navigation }) => {
  const [ inputMessage, setInputMessage ] = useState( '' );
  const [ messages, setMessages ] = useState( messagesData );

  const { top } = useSafeAreaInsets();

  const handleSendMessage = () => {
    if ( inputMessage.trim() !== '' ) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'Usuario 1',
        text: inputMessage
      }

      setMessages([ ...messages, newMessage ])
      setInputMessage( '' );
    }
  }

  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <ChatHeader
        receiverName='Usuario 2'
        receiverTag='tag 1'
        navigation={ navigation }
        icon='event'
      />

      {
        ( messagesData.length > 0 ) 
          ? <FlatList
              data={ messages }
              keyExtractor={ ( item ) => item.id.toString() }
              renderItem={ renderItem }
              style={ styles.messagesList }
              inverted
            />
          : <View style={ styles.emptyChat }>
              <Text style={ styles.emptyChatText }>No hay mensajes</Text>
            </View>
      }


      <View style={ styles.inputContainer }>
        <TextInput
          style={ styles.textInput }
          placeholder='Escribe tu mensaje...'
          value={ inputMessage }
          onChangeText={ ( text ) => setInputMessage( text ) }
        />

        <TouchableOpacity
          style={ styles.sendButton }
          onPress={ handleSendMessage }
        >
          <Text style={ styles.sendButtonText }>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  senderContainer: {
  },
  receiverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messagesList: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 8,
    maxWidth: '70%',
    paddingHorizontal: 20
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondary,
    padding: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 8,
    maxWidth: '70%',
    paddingHorizontal: 20
  },
  messageText: {
    color: '#FFF',
    fontSize: 16
  },
  emptyChat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyChatText: {
    fontSize: 18
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8
  },
  sendButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  sendButtonText: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  chatAvatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10

  }
});
