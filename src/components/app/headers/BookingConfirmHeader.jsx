// React Native
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
// React Navite Vector Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
// Theme
import { colors } from '../../../theme';

export const BookingConfirmHeader = ({ navigation }) => {
  return (
    <View style={ styles.header }>
      <TouchableOpacity
        onPress={ () => navigation.popToTop() }
      >
        <Icon
          name='navigate-before'
          size={ 30 }
          color={ colors.primary }
        />
      </TouchableOpacity>

      <View style={ styles.headerContent }>
        <View style={ styles.textContainer }>
        </View>
      </View>

      <TouchableOpacity
        onPress={ () => console.log( 'Open Calender' ) }
      >
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    flexDirection: 'column',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 16,
    color: colors.primary,
    textAlign: 'center'
  },
  topAvatar: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 50
  }
});
