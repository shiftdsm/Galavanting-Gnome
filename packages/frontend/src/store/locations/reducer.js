import { LOCATIONS_ACTIONS } from './actions';

const initialLocations = [];

export const locationsReducer = (state = initialLocations, action) => {
  if (action.type === LOCATIONS_ACTIONS.SET_LOCATIONS) {
    return action.payload;
  }

  return state;
};
