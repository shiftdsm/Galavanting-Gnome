import { ofType, combineEpics } from 'redux-observable';
import { LOCATIONS_ACTIONS, setLocations } from './actions';
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const fetchLocationsEpic = action$ => action$.pipe(
  ofType(LOCATIONS_ACTIONS.FETCH_LOCATIONS),
  mergeMap(action => ajax.getJSON('http://localhost:5000/locations').pipe(
    map(response => setLocations(response)),
  )),
);

export const locationsEpic = combineEpics(
  fetchLocationsEpic,
);
