import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../common';
import {calcHeight, calcFont, calcWidth} from '../../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: calcWidth(20),
    marginTop: calcHeight(10),
    width: '100%',
  },
  icon: {
    height: calcHeight(30),
    width: calcHeight(30),
    marginRight: calcWidth(10),
  },
  textContent: {
    flex: 1,
    flexDirection: 'row',
  },
  icons: {
    flex: 0.5,
    flexDirection: 'row',
    width: calcWidth(30),
    height: calcHeight(27),
    marginRight: calcWidth(30),
  },
  text: {
    ...FONTS.medium,
    fontSize: calcFont(20),
  },
  deleteIcon: {
    ...FONTS.medium,
    fontSize: calcFont(20),
  },
});
