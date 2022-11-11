import {ADD_NEW_CITY, REMOVE_CITY} from '../types';

export const addNewCity = (cities, addedItem) => async dispatch => {
  const data = [...cities, addedItem];
  dispatch({type: ADD_NEW_CITY, payload: data});
};

export const removeCity = (cities, deletedItem) => async dispatch => {
  const data = cities.filter(item => item !== deletedItem);
  dispatch({type: REMOVE_CITY, payload: data});
};
