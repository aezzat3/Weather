import React from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddIcon from '../../../../assets/images/Add.svg';
import {addNewCity} from '../../../redux/actions/citiesAction';
import {getCities} from '../../../redux/selectors/citiesSelectors';
import {AppText, Line} from '../../atom';
import FloatButton from '../../molecules/FloatButton';
import CityCard from '../../organisms/CityCard';

import styles from './styles';

let CitiesTemp = () => {
  const dispatch = useDispatch();

  const cities = useSelector(getCities);

  const onBackPress = () => {
    dispatch(addNewCity('London'));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <AppText>{item}</AppText>}
        keyExtractor={(item, index) => index + ''}
        ItemSeparatorComponent={() => <Line style={styles.itemSeparator} />}
        contentContainerStyle={styles.contentContainer}
      />
      <FloatButton iconComponent={AddIcon} onPress={onBackPress} />
    </View>
  );
};

CitiesTemp = React.memo(CitiesTemp);
export {CitiesTemp};
