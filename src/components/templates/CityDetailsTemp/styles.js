import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../common';
import {calcFont, calcHeight, calcWidth} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: calcHeight(280),
    backgroundColor: COLORS.blue,
  },
  card: {
    flex: 1,
    overflow: 'scroll',
    width: calcWidth(300),
    height: calcHeight(430),
    position: 'absolute',
    top: calcHeight(150),
    left: calcWidth(50),
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  text: {
    ...FONTS.bold,
    fontSize: calcFont(20),
    alignSelf: 'center',
    marginTop: calcHeight(20),
  },
  subText: {
    ...FONTS.regular,
    fontSize: calcFont(18),
    alignSelf: 'center',
    marginTop: calcHeight(20),
    color: COLORS.blue,
  },
  textContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  iconStyle: {
    alignSelf: 'center',
    marginVertical: calcHeight(30),
    color: COLORS.blue,
  },
});

export default styles;
