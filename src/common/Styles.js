import {StyleSheet} from 'react-native';
import {calcWidth} from '../utils';

export const STYLES = StyleSheet.create({
  shaddow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,

    elevation: 1,
    backgroundColor: '#FFF',
  },

  headerHorizontal: {
    paddingHorizontal: calcWidth(20),
  },
});
