// React Native
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
// React Native Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
// Colors
import { colors } from '../../../theme';


export const ChatHeader = ({
  receiverName = '',
  receiverTag = '',
  navigation,
  icon
}) => {
  return (
    <View style={ styles.header }>
      <TouchableOpacity
        onPress={ () => navigation.pop() }
      >
        <Icon
          name='navigate-before'
          size={ 30 }
          color={ colors.primary }
        />
      </TouchableOpacity>

      <View style={ styles.textContainer }>
        <Text style={ styles.headerTitle }>
          { receiverName }
        </Text>
        <Text style={ styles.subTitle }>
          { receiverTag }
        </Text>
      </View>

      <TouchableOpacity
        onPress={ () => console.log( 'Open Options' ) }
      >
        <Icon
          name={ icon }
          size={ 30 }
          color={ colors.primary }
        />
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
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
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
});
