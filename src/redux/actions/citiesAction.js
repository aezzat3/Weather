import {ADD_NEW_CITY, REMOVE_CITY} from '../types';

export const addNewCity = city => async dispatch => {
  dispatch({type: ADD_NEW_CITY, payload: city});
};

export const removeCity = city => async dispatch => {
  dispatch({type: REMOVE_CITY, payload: city});
};
