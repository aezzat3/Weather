import {StyleSheet} from 'react-native';
import {COLORS} from '../../../common/Colors';
import {calcHeight, calcWidth} from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    marginVertical: calcHeight(21.3),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.brownishGrey,
    marginStart: calcWidth(9.2),
  },
});

export default styles;
