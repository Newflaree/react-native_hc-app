//React
import {
  useRef,
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
// Colors
import { colors } from '../../theme';


export const InitConfigModal = ({ isVisible, onClose }) => {
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
            <Icon
              name='keyboard-arrow-down'
              size={ 40 }
              style={ styles.contentArrow }
            />

            <Text style={ styles.contentTitle }>
              No te preocupes...
            </Text>
            <Text style={ styles.contentText }>
              Compártenos tu ubicación para ayudarte a encontrar al relator indicado. Si no, no podrás hacer Match con nadie.
            </Text>
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
    color: colors.primary,
    bottom: '35%'
  },
  contentTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  },
  contentText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20
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
