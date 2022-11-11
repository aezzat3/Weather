import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../common';
import {calcHeight, calcFont, calcWidth} from '../../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: calcWidth(20),
    marginTop: calcHeight(10),
  },
  icon: {
    height: calcHeight(30),
    width: calcHeight(30),
    marginRight: calcWidth(10),
  },
  icons: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: calcWidth(10),
    height: calcHeight(20),
  },
  text: {
    ...FONTS.medium,
    fontSize: calcFont(20),
  },
  deleteIcon: {
    ...FONTS.medium,
    fontSize: calcFont(20),
    color: COLORS.watermelon,
  },
});
