// React
import {
  useState,
  useEffect
} from 'react';
// React Native
import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Components
import {
  Header,
  NarratorCard
} from '../../components/app';
// Database
import { usersData } from '../../database';

export const FavoritesScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const [ favoriteUsers, setFavoriteUsers ] = useState( [] );

  const getFavoritesUsers = () => {
    const favoriteUsers = usersData.filter( ( item ) => item.isFavorite === true  );
    setFavoriteUsers( favoriteUsers )
  }

  useEffect( () => {
    getFavoritesUsers();
  }, [] );



  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <Header screenName='Favoritos' />

      <FlatList
        data={ favoriteUsers }
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
