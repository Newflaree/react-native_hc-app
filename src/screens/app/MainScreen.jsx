// React Native
import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Colors
import { colors } from '../../theme';
// Components
import { Header, NarratorCard } from '../../components/app';
// Database
import { usersData } from '../../database';


export const MainScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <Header screenName='Inicio' />

      <FlatList
        data={ usersData }
        renderItem={ ({ item }) => <NarratorCard item={ item } navigation={ navigation } /> }
        numColumns={ 2 }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
