import { combineReducers } from 'redux';

export const LOCATIONS_ACTIONS = {
  FETCH_LOCATIONS: 'FETCH_LOCATIONS',
  SET_LOCATIONS: 'SET_LOCATIONS',
};

const initialLocations = [];

const locationsReducer = (state = initialLocations, action) => {
  if (action.type === LOCATIONS_ACTIONS.SET_LOCATIONS) {
    return action.payload;
  }

  return state;
};

export const rootReducer = combineReducers({
  locations: locationsReducer,
});
