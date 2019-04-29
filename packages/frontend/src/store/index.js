import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { locationsReducer } from './locations/reducer';
import { locationsEpic } from './locations/epics'

const rootReducer = combineReducers({
  locations: locationsReducer,
});

const rootEpic = combineEpics(
  locationsEpic,
);

export const buildStore = () => {
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(epicMiddleware),
  ));

  epicMiddleware.run(rootEpic);

  return store;
};
