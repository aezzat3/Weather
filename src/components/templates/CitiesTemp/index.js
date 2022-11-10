import React from 'react';
import {View} from 'react-native';
import AddIcon from '../../../../assets/images/Add.svg';
import FloatButton from '../../organisms/FloatButton';

import styles from './styles';

let CitiesTemp = () => {
  const onBackPress = () => {};
  return (
    <View style={styles.container}>
      <FloatButton iconComponent={AddIcon} onPress={onBackPress} />
    </View>
  );
};

CitiesTemp = React.memo(CitiesTemp);
export {CitiesTemp};
