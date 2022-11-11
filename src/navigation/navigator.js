import {navigate} from './index';

export const navigateCityDetails = ({cityName}) => {
  navigate('cityDetails', {cityName});
};
