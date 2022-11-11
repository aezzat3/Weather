import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth } from '../../../utils';
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
  },
  contentModal: {
    backgroundColor: '#FFF',
    minHeight: calcHeight(200),
    width: calcWidth(346),
    borderRadius: calcHeight(3.3),
    alignSelf: 'center',
  },
});
export default styles;
