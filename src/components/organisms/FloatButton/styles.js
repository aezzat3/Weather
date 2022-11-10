import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../common';
import {calcHeight, calcWidth} from '../../../utils';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: calcWidth(120),
    height: calcHeight(50),
    borderRadius: calcHeight(46),
    position: 'absolute',
    bottom: calcHeight(50),
    right: calcWidth(30),
    backgroundColor: COLORS.blue,
    flexDirection: 'row',
  },
  icon: {
    width: calcWidth(22),
    height: calcHeight(22),
    color: COLORS.white,
  },
  textStyle: {
    alignSelf: 'center',
    ...FONTS.medium,
    color: COLORS.white,
  },
});
