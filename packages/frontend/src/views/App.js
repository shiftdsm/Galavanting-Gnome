import React from 'react';
import Typography from '@material-ui/core/Typography';
import GnomeMap from './GnomeMap';
import MainText from './MainText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const App = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="h1" color="inherit">
            Galavanting Gnome
          </Typography>
        </Toolbar>
      </AppBar>

      <GnomeMap />
      <MainText />
    </div>
  );
};

export default App;
