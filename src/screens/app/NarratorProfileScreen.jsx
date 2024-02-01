// React Native
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Colors
import { colors } from '../../theme';
// Components
import { BackHeader } from '../../components/app';
// Database
import { usersData } from '../../database';


export const NarratorProfileScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <BackHeader screenName='Perfil del Narrador' navigation={ navigation } />

      <Text>NarratorProfileScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
