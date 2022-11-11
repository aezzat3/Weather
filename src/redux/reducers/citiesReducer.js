import {ADD_NEW_CITY, REMOVE_CITY} from '../types';

const INITIAL_STATE = {
  cities: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_CITY:
      return {
        cities: action.payload,
      };
    case REMOVE_CITY:
      return {
        cities: action.payload,
      };
    default:
      return state;
  }
};
