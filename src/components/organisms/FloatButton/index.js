import React from 'react';
import {TouchableOpacity} from 'react-native';
import {AppText} from '../../atom/AppText';

import styles from './styles';

const FloatButton = ({
  style,
  iconComponent: IconComponent,
  iconStyle,
  onPress,
}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <IconComponent style={[styles.icon, iconStyle]} />
    <AppText style={styles.textStyle}>Add City</AppText>
  </TouchableOpacity>
);

export default React.memo(FloatButton);
