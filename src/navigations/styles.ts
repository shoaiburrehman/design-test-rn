import {StyleSheet} from 'react-native';
import {vh, vw} from '../themes/units';
import {Colors} from '../themes/Colors';
import {Fonts} from '../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: vh * 3,
    width: vh * 3,
  },
  bottomTabIcon: {
    width: vw * 6,
    height: vw * 6,
  },
  headImgs: {
    width: vw * 9,
    height: vw * 9,
    borderRadius: vw * 4.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifImg: {width: vw * 7.5, height: vw * 7.5},
  linearText: {
    height: vw * 11,
    width: vw * 11,
    borderRadius: vw * 5.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: vw * 5,
  },
  profView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BG_COLOR,
    height: vw * 10.4,
    width: vw * 10.4,
    borderRadius: vw * 5.2,
  },
  profImg: {width: vw * 9, height: vw * 9, borderRadius: vw * 4.5},
  notifCount: {
    position: 'absolute',
    right: 0,
    width: vw * 3.5,
    height: vw * 3.5,
    borderRadius: vw * 3.5,
    backgroundColor: Colors.NOTIF_COLOR,
  },
  notifText: {...Fonts.Regular(10), textAlign: 'center'},
  bottomTabCircle: {
    width: vw * 2,
    height: vw * 2,
    marginTop: vh,
    borderRadius: vw,
    backgroundColor: Colors.TAB_COLOR,
  },
  circleGradient: {
    width: vw * 10,
    height: vw * 10,
    borderRadius: vw * 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profView: {
    margin: 1,
    width: vw * 8,
    height: vw * 8,
    borderRadius: vw * 3,
  },
  visit: {
    margin: 1,
    paddingHorizontal: 8,
    textAlign: 'center',
    backgroundColor: Colors.BG_COLOR,
    fontSize: 12,
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
