import {StyleSheet} from 'react-native';
import {vh, vw} from '../themes/units';
import {Colors} from '../themes/Colors';

const styles = StyleSheet.create({
  image: {
    height: vh * 3,
    width: vh * 3,
  },
  bottomTabIcon: {
    width: vw * 6,
    height: vw * 6,
  },
  bottomTabCircle: {
    width: vw * 2,
    height: vw * 2,
    marginTop: vh,
    borderRadius: vw,
    backgroundColor: Colors.TAB_COLOR,
  },

  logoStyle: {
    resizeMode: 'contain',
    height: 15 * vh,
    width: 15 * vw,
  },

  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  leftIconStyle: {
    resizeMode: 'contain',
    height: 6 * vw,
    width: 6 * vw,
  },

  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerMesh: {
    width: 100 * vw,
    height: 25 * vh,
    resizeMode: 'cover',
  },

  headerBackgroundContainer: {
    borderBottomLeftRadius: 5 * vw,
    borderBottomRightRadius: 5 * vw,
  },

  titleTextStyle: {
    color: Colors.WHITE,
    fontSize: 2.5 * vh,
  },

  backIconStyle: {
    resizeMode: 'contain',
    height: 3 * vh,
    width: 2.5 * vw,
  },
});

export default styles;
