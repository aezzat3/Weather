import {StyleSheet} from 'react-native';
import {calcWidth, calcHeight} from '../../../utils';
const styles = StyleSheet.create({
  modalContent: {
    alignItems: 'center',
    width: calcWidth(346),
    paddingVertical: calcHeight(35),
  },
  btnTitleStyle: {
    flex: 2,
    marginHorizontal: calcHeight(10),
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    marginTop: calcHeight(60),
  },
});

export default styles;
