import { combineReducers } from 'redux';

const initialLocations = [
  { id: 1, lat: '100.00', lon: '100.00' },
];

const locationsReducer = (state = initialLocations, action) => {
  return state;
};

export const rootReducer = combineReducers({
  locations: locationsReducer,
});
