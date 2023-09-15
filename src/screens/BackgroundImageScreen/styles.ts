import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/Colors';
import {vh, vw} from '../../themes/units';
import {Fonts} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: vw * 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageView: {
    width: vw * 26,
    height: vw * 26,
    borderRadius: vw * 13,
    borderWidth: 2,
    borderColor: Colors.BLACK,
    marginBottom: vh * 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: vw * 25,
    height: vw * 25,
    borderRadius: vw * 12.5,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    backgroundColor: Colors.BG_COLOR,
    paddingVertical: vh,
    paddingHorizontal: vw * 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: vw * 2,
  },
  btnStyleText: {
    ...Fonts.Regular(15, Colors.WHITE),
  },
});
