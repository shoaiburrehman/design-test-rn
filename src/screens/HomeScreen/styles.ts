import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/Colors';
import {vh, vw} from '../../themes/units';
import {Fonts} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
    paddingHorizontal: vw * 4,
    paddingTop: vh * 15,
  },
  scrollContainer: {
    paddingBottom: vh * 15,
  },
  textStyle: {
    ...Fonts.Regular(12),
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: vh * 3,
  },
  time: {
    ...Fonts.Bold(55),
  },
  day: {
    ...Fonts.Bold(55, Colors.PALE_PINK),
  },
  searchView: {
    width: vh * 7,
    height: vh * 7,
    borderRadius: vh * 3.5,
    backgroundColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: vh * 3,
    height: vh * 3,
  },
});

export default styles;
