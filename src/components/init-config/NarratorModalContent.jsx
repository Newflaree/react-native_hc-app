// React Native
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
// React Native Vector Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
// Colors
import { colors } from '../../theme';


export const NarratorProfileContent = ({ navigation, profileData, close }) => {
  const {
    name,
    tag,
    distance,
    rating,
    about
  } = profileData;

  const handleCloseModal = ( path ) => {
    close();
    navigation.navigate( path );
  }

  return (
    <View style={ styles.container }>
      <Icon
        name='keyboard-arrow-down'
        size={ 40 }
        style={ styles.contentArrow }
      />

      <TouchableOpacity>
        <Icon
          name='star-border'
          size={ 40 }
          color='gold'
          style={ styles.favoriteButton }
        />
      </TouchableOpacity>

      <View style={ styles.profileImageContainer }>
        <Image
          style={ styles.profileImage }
          source={{ uri: 'https://res.cloudinary.com/newflare/image/upload/v1705381326/demos/hc/hsjnbgecbaaijmftf0vi.png' }}
        />

      </View>

      <View style={ styles.userInfo }>
        <Text style={ styles.userName }>
          { name }
        </Text>
        <Text style={ styles.userTag }>
          { tag }
        </Text>
        <Text style={ styles.userDistance }>
          { distance }
        </Text>

        <View style={ styles.ratingContainer }>
          {
            [1, 2, 3, 4, 5].map( ( star ) => (
              <Icon
                key={ star }
                name={ rating >= star ? 'star' : 'star-border' }
                size={ 16 }
                color='gold'
                style={{ marginRight: 4 }}
              />
            ))
          }
        </View>
      </View>

      <View style={ styles.aboutContainer }>
        <Text style={ styles.aboutTitle }>Sobre mi</Text>
        <Text style={ styles.aboutDescription }>{ about }</Text>
      </View>

      <View style={ styles.buttonsContainer }>
        <TouchableOpacity
          style={ styles.chatButton }
          onPress={ () => handleCloseModal( 'ChatScreen' ) }
        >
          <Icon
            name='chat-bubble'
            size={ 20 }
            color='#FFF'
          />

          <Text style={ styles.buttonText }>
            Chatear
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ styles.scheduleButton }
          onPress={ () => handleCloseModal( 'CalendarScreen' ) }
        >
          <Icon
            name='calendar-today'
            size={ 20 }
            color='#FFF'
          />

          <Text style={ styles.buttonText }>
            Agendar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 16,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  contentArrow: {
    bottom: 12,
    textAlign: 'center',
    color: colors.primary
  },
  profileImageContainer: {
    position: 'relative',
    alignItems: 'center'
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  favoriteButton: {
    position: 'absolute',
    bottom: '10%',
    right: 0,
    backgorundColor: 'gold',
    padding: 8,
    borderRadius: 20
  },
  userInfo: {
    marginTop: 8
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  userTag: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  userDistance: {
    fontSize: 14,
    color: '#888'
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 4
  },
  aboutContainer: {
    marginTop: 20
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  aboutDescription: {
    fontSize: 16,
    color: '#555',
    marginTop: 8
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40
  },
  chatButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 20,
    marginRight: 8
  },
  scheduleButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 20
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 10
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: '#CCC',
    padding: 12,
    borderRadius: 8
  },
  closeButtonText: {
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
