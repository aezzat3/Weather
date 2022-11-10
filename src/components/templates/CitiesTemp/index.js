import React from 'react';
import {View} from 'react-native';
import styles from './styles';

let CitiesTemp = () => {
  return <View style={styles.container} />;
};

CitiesTemp = React.memo(CitiesTemp);
export {CitiesTemp};
