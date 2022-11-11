import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import {AppText} from '../../atom';

let CityCard = ({
  item,
  CityIcon,
  InfoIcon,
  DeleteIcon,
  onPressInfo,
  onPressDelete,
}) => (
  <View style={styles.container} activeOpacity={0.7}>
    <CityIcon style={styles.icon} />
    <AppText style={styles.text}>{item}</AppText>
    <View style={styles.icons}>
      <DeleteIcon style={styles.deleteIcon} onPress={onPressDelete} />
      <InfoIcon style={styles.icon} onPress={onPressInfo} />
    </View>
  </View>
);

CityCard = React.memo(CityCard);
export {CityCard};

CityCard.propTypes = {
  item: PropTypes.string,
};
