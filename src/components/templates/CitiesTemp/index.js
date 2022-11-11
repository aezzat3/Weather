import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CityIcon from '../../../../assets/images/City.svg';
import InfoIcon from '../../../../assets/images/Info.svg';
import DeleteIcon from '../../../../assets/images/Delete.svg';
import AddIcon from '../../../../assets/images/Add.svg';
import {addNewCity, removeCity} from '../../../redux/actions/citiesAction';
import {getCities} from '../../../redux/selectors/citiesSelectors';
import {Line} from '../../atom';
import FloatButton from '../../molecules/FloatButton';
import {CityCard} from '../../organisms/CityCard';
import styles from './styles';
import {AddCityModal} from '../../organisms/AddCityModal';

let CitiesTemp = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const cities = useSelector(getCities);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const onDeleteItem = item => {
    dispatch(removeCity(cities, item));
  };

  const onAddNewCity = item => {
    dispatch(addNewCity(cities, item));
    toggleModal();
  };

  useEffect(() => {
    console.log('citiescitiescitiescitiescities ', cities);
  }, [cities]);

  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CityCard
            item={item}
            onPressDelete={() => onDeleteItem(item)}
            CityIcon={CityIcon}
            InfoIcon={InfoIcon}
            DeleteIcon={DeleteIcon}
          />
        )}
        keyExtractor={(item, index) => index + ''}
        ItemSeparatorComponent={() => <Line style={styles.itemSeparator} />}
        contentContainerStyle={styles.contentContainer}
      />
      <FloatButton iconComponent={AddIcon} onPress={toggleModal} />
      <AddCityModal
        visible={isVisible}
        onPressClose={toggleModal}
        onPressCancel={toggleModal}
        onPressConfirm={onAddNewCity}
      />
    </View>
  );
};

CitiesTemp = React.memo(CitiesTemp);
export {CitiesTemp};
