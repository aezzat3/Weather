import {StyleSheet} from 'react-native';
import {FONTS} from '../../../common';
import {calcHeight, calcFont} from '../../../utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: calcHeight(30),
    width: calcHeight(30),
  },
  text: {
    ...FONTS.medium,
    fontSize: calcFont(20),
  },
});
