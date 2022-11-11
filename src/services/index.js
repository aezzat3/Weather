import axios from 'axios';
import {API_KEY, BASE_URL} from '../common';

export const getCityDetailsApi = async cityName => {
  const {data} = await axios.get(
    `${BASE_URL}/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
  );
  return data;
};
