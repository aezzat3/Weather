import {StyleSheet, Platform} from 'react-native';
import {FONTS, COLORS} from '../../../common';

const styles = StyleSheet.create({
  text: {
    ...FONTS.regular,
    color: COLORS.greyishBrown,
    textAlign: Platform.OS === 'ios' ? 'left' : null,
  },
});

export default styles;
