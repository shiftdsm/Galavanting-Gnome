import React from 'react';
// import LocationList from './LocationList';
import Typography from '@material-ui/core/Typography';
import GnomeMap from './GnomeMap';

const App = (props) => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>Galavanting Gnome</Typography>

      <GnomeMap />
      {/* <LocationList /> */}
    </div>
  );
};

export default App;
