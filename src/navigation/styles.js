import {StyleSheet} from 'react-native';
import {COLORS, FONTS, STYLES} from '../common';
import {calcFont, calcHeight, calcWidth} from '../utils';

const styles = StyleSheet.create({
  headerTitleStyle: {
    ...FONTS.bold,
    fontSize: calcFont(30),
  },
  headerStyle: {
    height: calcHeight(200),
    backgroundColor: COLORS.blue,
    shadowOpacity: 0,
    elevation: 0,
  },
  orderHeaderStyle: {
    elevation: 0,
    borderBottomWidth: 0,
  },
  cardStyle: {
    backgroundColor: '#f4f5f9',
  },
  headerSidesContainerStyle: {
    paddingHorizontal: calcWidth('20'),
  },
  backTitleFontStyle: {
    marginStart: calcWidth(14),
    ...FONTS.heavy,
    fontSize: calcFont(16.7),
    color: COLORS.brownishGrey,
  },
});

export const common_nav_options = {
  headerTintColor: COLORS.white,
  headerTitleAlign: 'center',
  headerTitleStyle: styles.headerTitleStyle,
  cardStyle: styles.cardStyle,
  headerStyle: styles.headerStyle,
  headerBackTitleVisible: false,
  headerRightContainerStyle: STYLES.headerHorizontal,
  headerLeftContainerStyle: STYLES.headerHorizontal,
};

export default styles;
