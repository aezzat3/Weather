import { StyleSheet, I18nManager } from 'react-native';
import { calcWidth, calcHeight, calcFont } from '../../../utils';
import { FONTS, COLORS } from '../../../common';

export default StyleSheet.create({
  container: {
    minHeight: calcHeight(80),
    marginBottom: calcHeight(5),
  },
  input: {
    ...FONTS.roman,
    textAlign: I18nManager.isRTL ? 'right' : null,
    fontSize: calcFont(16.7),
    color: COLORS.dark,
    height: calcHeight(55),
    width: calcWidth(300),
    backgroundColor: '#f4f5f9',
    borderRadius: calcWidth(5),
    paddingHorizontal: calcWidth(23),
  },
  labelStyle: {
    ...FONTS.heavy,
    height: calcHeight(20),
    color: COLORS.coolGrey,
    fontSize: calcFont(15),
    marginBottom: calcHeight(5),
  },
  errorStyle: {
    borderBottomColor: COLORS.redishOrange,
    borderBottomWidth: 1,
  },
  errorText: {
    color: COLORS.redishOrange,
    fontSize: calcFont(14),
    height: calcHeight(20),
  },
});
