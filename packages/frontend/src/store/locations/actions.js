export const LOCATIONS_ACTIONS = {
  FETCH_LOCATIONS: 'FETCH_LOCATIONS',
  SET_LOCATIONS: 'SET_LOCATIONS',
};

export const fetchLocations = () => ({
  type: LOCATIONS_ACTIONS.FETCH_LOCATIONS
});

export const setLocations = (payload) => ({
  payload,
  type: LOCATIONS_ACTIONS.SET_LOCATIONS,
});
