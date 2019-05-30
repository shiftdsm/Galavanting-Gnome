import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './views/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { buildStore } from './store';
import { fetchLocations } from './store/locations/actions';
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles';

const store = buildStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#da1b5b',
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchLocations());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
