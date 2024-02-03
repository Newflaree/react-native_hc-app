//React
import {
  useRef,
} from 'react';
// React Navite
import {
  Animated,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// React Native Vector Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
// Colors
import { colors } from '../../theme';


export const EulaModal = ({ isVisible, onClose }) => {
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
          <ScrollView style={ styles.content }>
            <Icon
              name='keyboard-arrow-down'
              size={ 40 }
              style={ styles.contentArrow }
            />

            <Text style={ styles.contentTitle }>
              Terminos de Uso
            </Text>
            <Text style={ styles.contentText }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget metus enim. Aenean dapibus magna sed lorem vehicula, sed fringilla nunc ornare. Integer sit amet hendrerit mauris. Aliquam malesuada lectus nec tortor congue, id tincidunt ex ullamcorper. Aliquam sed quam massa. Aliquam tempus leo ut dapibus commodo. Nam sollicitudin ut urna et aliquam. Vestibulum lorem nisl, scelerisque non risus in, pulvinar molestie metus. Vivamus venenatis venenatis neque, et laoreet felis tempor at. Ut elit lectus, maximus quis volutpat vulputate, faucibus vitae magna. Sed eget elit ipsum. Aliquam vitae neque eros.
            </Text>
            <Text style={ styles.contentText }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget metus enim. Aenean dapibus magna sed lorem vehicula, sed fringilla nunc ornare. Integer sit amet hendrerit mauris. Aliquam malesuada lectus nec tortor congue, id tincidunt ex ullamcorper. Aliquam sed quam massa. Aliquam tempus leo ut dapibus commodo. Nam sollicitudin ut urna et aliquam. Vestibulum lorem nisl, scelerisque non risus in, pulvinar molestie metus. Vivamus venenatis venenatis neque, et laoreet felis tempor at. Ut elit lectus, maximus quis volutpat vulputate, faucibus vitae magna. Sed eget elit ipsum. Aliquam vitae neque eros.
            </Text>
            <Text style={ styles.contentText }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget metus enim. Aenean dapibus magna sed lorem vehicula, sed fringilla nunc ornare. Integer sit amet hendrerit mauris. Aliquam malesuada lectus nec tortor congue, id tincidunt ex ullamcorper. Aliquam sed quam massa. Aliquam tempus leo ut dapibus commodo. Nam sollicitudin ut urna et aliquam. Vestibulum lorem nisl, scelerisque non risus in, pulvinar molestie metus. Vivamus venenatis venenatis neque, et laoreet felis tempor at. Ut elit lectus, maximus quis volutpat vulputate, faucibus vitae magna. Sed eget elit ipsum. Aliquam vitae neque eros.
            </Text>
          </ScrollView>
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
  },
  contentArrow: {
    color: colors.primary,
    textAlign: 'center'
  },
  contentTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30
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
