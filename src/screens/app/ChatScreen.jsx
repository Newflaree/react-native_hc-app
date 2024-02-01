// React
import {
  useRef,
  useState
} from 'react';
// React Native
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Colors
import { colors } from '../../theme';
// Components
import { ChatHeader } from '../../components/app/headers';


const messagesData = [
  { id: 1, sender: 'Usuario 1', text: 'Hola. ¿cómo estás?' },
  { id: 2, sender: 'Usuario 2', text: 'Estoy bien, gracias. ¿Y tú?' }
];

const renderItem = ({ item }) => (
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
);


export const ChatScreen = ({ navigation }) => {
  const [ inputMessage, setInputMessage ] = useState( '' );
  const [ messages, setMessages ] = useState( messagesData );
  const flatListRef = useRef( null );

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

      flatListRef.current.scrollToEnd({ animated: true });
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

      <FlatList
        ref={ flatListRef }
        data={ messages }
        keyExtractor={ ( item ) => item.id.toString() }
        renderItem={ renderItem }
        style={ styles.messagesList }
        inverted
        onContentSizeChange={ () => flatListRef.current.scrollToEnd({ animated: true }) }
      />

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
  messagesList: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 8,
    marginBottom: 8,
    maxWidth: '70%',
    paddingHorizontal: 20
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 8,
    marginBottom: 8,
    maxWidth: '70%',
    paddingHorizontal: 20
  },
  messageText: {
    color: '#FFF',
    fontSize: 16
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
  }
});
