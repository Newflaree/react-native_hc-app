import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
// Database
import { tagsData } from '../../database';
// Theme
import { colors } from '../../theme';

export const SetTagsScreen = ({ navigation }) => {
  const [ selectedTags, setSelectedTags ] = useState( [] );

  const toggleTag = ( tag ) => {
    ( selectedTags.includes( tag ) )
      ? setSelectedTags( selectedTags.filter( (selectedTag) => selectedTag !== tag ) )
      : setSelectedTags( [ ...selectedTags, tag ] ) 
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        ¿Qué buscas?
      </Text>

      <Text style={ styles.paragraph }>
        Selecciona según la historia que quieres contar
      </Text>

      <View style={ styles.divider } />

      <FlatList
        data={ tagsData }
        numColumns={ 3 }
        keyExtractor={ ( item ) => item }
        renderItem={ ({ item }) => (
          <TouchableOpacity
            style={[
              styles.tag,
              { 
                backgroundColor: selectedTags.includes( item ) 
                  ? colors.primary 
                  : '#DDD' 
              } 
            ]}
            onPress={ () => toggleTag( item ) }
          >
            <Text
              style={{
                color: selectedTags.includes( item )
                  ? 'white'
                  : 'Black'
              }}
            >
              { item }
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={ styles.divider } />

      <TouchableOpacity
        style={[ styles.button, { backgroundColor: colors.primary }]}
        onPress={ () => navigation.navigate( 'SetLocationScreen' ) }
      >
        <Text style={ styles.buttonText }>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  title: {
    marginTop: 100,
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 10
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    width: '100%',
    marginVertical: 10
  },
  tag: {
    backgroundColor: '#DDD',
    padding: 10,
    margin: 5,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 15,
    marginTop: 10,
    marginBottom: 40

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  },
});
