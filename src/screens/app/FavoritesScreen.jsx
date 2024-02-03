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
// Modals
import { NarratorProfileModal } from '../../components/init-config';
// Database
import { usersData } from '../../database';

export const FavoritesScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const [ bottomSheetVisible, setBottomSheetVisible ] = useState( false );
  const [ favoriteUsers, setFavoriteUsers ] = useState( [] );

  const getFavoritesUsers = () => {
    const favoriteUsers = usersData.filter( ( item ) => item.isFavorite === true  );
    setFavoriteUsers( favoriteUsers )
  }

  const handleOpenModal = () => {
    // TODO: Logic to open Learn More modal
    setBottomSheetVisible( !bottomSheetVisible );
  }

  useEffect( () => {
    getFavoritesUsers();
  }, [] );



  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <Header screenName='Favoritos' />

      <FlatList
        data={ favoriteUsers }
        renderItem={ ({ item }) => <NarratorCard
          openModal={ handleOpenModal }
          item={ item }
          navigation={ navigation }
          /> 
        }
        numColumns={ 2 }
      />

      <NarratorProfileModal
        navigation={ navigation }
        isVisible={ bottomSheetVisible } 
        onClose={ handleOpenModal }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
