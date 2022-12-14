import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CloudIcon from '../../../../assets/images/CloudIcon.svg';
import {getCityDetails} from '../../../redux/actions/citiesAction';
import {getAllCityDetails} from '../../../redux/selectors/citiesSelectors';
import {AppText} from '../../atom';
import styles from './styles';

let CityDetailsTemp = () => {
  const dispatch = useDispatch();
  const {params} = useRoute();
  const cityName = params?.cityName;

  useEffect(() => {
    cityName && fetchData(cityName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  const fetchData = () => {
    dispatch(getCityDetails(cityName));
  };

  const cityDetails = useSelector(getAllCityDetails);
  const isLoading = cityDetails?.loading;
  const hasError = cityDetails?.error;

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.card}>
        {!hasError ? (
          <>
            {isLoading ? (
              <ActivityIndicator size={400} />
            ) : (
              <>
                <AppText style={styles.text}>{cityName}</AppText>
                <CloudIcon style={styles.iconStyle} />
                <View style={styles.textContent}>
                  <AppText style={styles.text}>Description</AppText>
                  <AppText style={styles.subText}>
                    {cityDetails?.data?.weather[0]?.description}
                  </AppText>
                </View>
                <View style={styles.textContent}>
                  <AppText style={styles.text}>Temperature</AppText>
                  <AppText style={styles.subText}>
                    {cityDetails?.data?.main.temp}
                  </AppText>
                </View>
                <View style={styles.textContent}>
                  <AppText style={styles.text}>Humidity</AppText>
                  <AppText style={styles.subText}>
                    {cityDetails?.data?.main.humidity}
                  </AppText>
                </View>
                <View style={styles.textContent}>
                  <AppText style={styles.text}>Windspeed</AppText>
                  <AppText style={styles.subText}>
                    {' '}
                    {cityDetails?.data?.wind.speed}
                  </AppText>
                </View>
              </>
            )}
          </>
        ) : (
          <AppText />
        )}
      </View>
    </View>
  );
};

CityDetailsTemp = React.memo(CityDetailsTemp);
export {CityDetailsTemp};
