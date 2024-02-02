//React
import {
  useRef,
  useState
} from 'react';
// React Navite
import {
  Animated,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// React Native Vector Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NarratorProfileContent } from './';


export const NarratorProfileModal = ({ isVisible, onClose, navigation }) => {
  const slideAnimation = useRef( new Animated.Value(0) ).current;

  handleOpen = () => {
    Animated.timing(
      slideAnimation,
      {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      }
    ).start();
  }

  handleClose = () => {
    Animated.timing(
      slideAnimation,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }
    ).start( () => onClose() );
  }

  return (
    <Modal
      visible={ isVisible }
      transparent
      animationType='slide'
      onRequestClose={ handleClose }
      onShow={ handleOpen }
    >
      <TouchableOpacity
        style={ styles.overlay }
        activeOpacity={ 1 }
        onPress={ handleClose }
      >
        <Animated.View
          style={[
            styles.bottomSheet,
            {
              transform: [
                {
                  translateY: slideAnimation.interpolate({
                    inputRange: [ 0, 1 ],
                    outputRange: [ 300, 0 ]
                  }),
                }
              ]
            }
          ]}
        >
          <View style={ styles.content }>
            <NarratorProfileContent
              navigation={ navigation }
              close={ handleClose }
              profileData={{
                name:'Test 1',
                tag: 'Tag 1',
                distance: '3 km',
                rating: 4,
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor libero, condimentum ut dui id'
              }}
            />
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentArrow: {
    bottom: '35%'
  },
  overlay: {
    flex: 1,

    backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
    justifyContent: 'flex-end'
  },
  bottomSheet: {
    backgroundColor: '#FFF',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  }
});
