import React from 'react';
import {TouchableOpacity} from 'react-native';
import {AppText} from '../..';
import styles from './styles';
import PropTypes from 'prop-types';
import {memo} from 'react';

const CityCard = ({item, IconComponent}) => {
  console.log('item jd;ogfjdg;ogjglfkjglkdf>>>', item);
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <AppText>{'dfgfgfgd'}</AppText>
      {/* <IconComponent style={styles.icon} /> */}
      {/* <AppText style={styles.textStyle}>{'item'}</AppText> */}
    </TouchableOpacity>
  );
};

CityCard.propTypes = {
  item: PropTypes.string,
};

export default memo(CityCard);
