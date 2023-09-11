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
    paddingBottom: vh * 16,
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
  cardView1: {
    position: 'absolute',
    width: '88%',
    top: vw,
    alignSelf: 'center',
    height: vh * 54,
    backgroundColor: Colors.CARD_BG1,
    borderRadius: vh * 2,
  },
  cardView2: {
    top: vw * 3,
    backgroundColor: Colors.TAB_COLOR,
  },
  tabView: {
    flex: 1,
    marginBottom: vh * 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabContainer: {},
  contentContainerStyle: {
    alignItems: 'center',
  },
  tabListingView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.PURPLE_OUT,
    paddingVertical: vw * 1.5,
    paddingHorizontal: vw * 4,
    borderRadius: vw * 5,
    marginRight: vw * 2,
    borderColor: Colors.TAB_COLOR,
  },
  tabTextStyle: {
    ...Fonts.Regular(12, Colors.WHITE),
  },
  numberView: {
    marginLeft: vw * 2,
    borderRadius: vw,
    backgroundColor: Colors.PURPLE_IN,
    marginVertical: vw * 1.5,
    paddingHorizontal: vw * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    ...Fonts.Regular(12, Colors.WHITE),
  },
});

export default styles;
