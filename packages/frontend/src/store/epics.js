import { combineEpics, ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';
import { LOCATIONS_ACTIONS } from '.';

const fetchLocationsEpic = action$ => action$.pipe(
  ofType(LOCATIONS_ACTIONS.FETCH_LOCATIONS),
  mapTo({
    type: LOCATIONS_ACTIONS.SET_LOCATIONS,
    payload: [
      { id: 1, lat: '100.00', lon: '100.00' },
    ],
  }),
);

export const rootEpic = combineEpics(
  fetchLocationsEpic,
);
