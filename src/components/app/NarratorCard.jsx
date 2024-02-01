// React Native
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
// React Native Icons
import Icon from 'react-native-vector-icons/MaterialIcons';


export const NarratorCard = ({ item = {}, navigation }) => {
  return (
    <TouchableOpacity
      style={ styles.card }
      onPress={ () => navigation.navigate( 'NarratorProfileScreen' ) }
    >
      <Image
        source={{ uri: 'https://res.cloudinary.com/newflare/image/upload/v1705381326/demos/hc/hsjnbgecbaaijmftf0vi.png' }}
        style={ styles.cardBackground }
      />

      {
        ( item.isFavorite ) && <Icon
          name='star'
          size={ 30 }
          color=''
          style={ styles.favoriteIcon }
        />
      }

      <View style={ styles.userInfo }>
        <Text style={ styles.userName }>Test-1</Text>
        <Text style={ styles.userTag }>Tag-1</Text>
        <Text style={ styles.userDistance }>3 km</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    width: '48%',
    aspectRatio: 1
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'gold'
  },
  userInfo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10
  },
  userName: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  userTag: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold'
  },
  userDistance: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold'
  }
});
