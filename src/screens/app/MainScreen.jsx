// React Native
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// React Native Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
// Colors
import { colors } from '../../theme';
// Components
import { NarratorCard } from '../../components/app';
// Database
import { usersData } from '../../database';


export const MainScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <View style={ styles.header }>
        <TouchableOpacity
          onPress={ () => console.log( 'Open Drawer' ) }
        >
          <Icon
            name='menu'
            size={ 30 }
            color={ colors.primary }
          />
        </TouchableOpacity>

        <Text style={ styles.headerTitle }>
          Inicio
        </Text>

        <TouchableOpacity
          onPress={ () => console.log( 'Open Options' ) }
        >
          <Icon
            name='notifications'
            size={ 30 }
            color={ colors.primary }
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={ usersData }
        renderItem={ ({ item }) => <NarratorCard item={ item } /> }
        numColumns={ 2 }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary
  },
});
