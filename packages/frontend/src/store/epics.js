import { combineEpics, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import { LOCATIONS_ACTIONS } from '.';

const fetchLocationsEpic = action$ => action$.pipe(
  ofType(LOCATIONS_ACTIONS.FETCH_LOCATIONS),
  mergeMap(action => ajax.getJSON('http://localhost:5000/locations').pipe(
    map(response => ({
      type: LOCATIONS_ACTIONS.SET_LOCATIONS,
      payload: response,
    }))
  )),
);

export const rootEpic = combineEpics(
  fetchLocationsEpic,
);
