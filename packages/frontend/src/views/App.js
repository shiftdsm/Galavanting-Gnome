import React from 'react';
// import LocationList from './LocationList';
import Typography from '@material-ui/core/Typography';
import GnomeMap from './GnomeMap';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  title: {
    textAlign: 'center',
  },
  about: {
    textAlign: 'center',
    marginTop: '2.5rem',
  },
  aboutBody: {
    fontSize: '1.15rem',
  },
});

const App = (props) => {
  const { classes } = props;

  return (
    <div>
      <Typography variant="h1" gutterBottom className={classes.title}>
        Galavanting Gnome
      </Typography>

      <GnomeMap />

      <div className={classes.about}>
        <Typography variant="h2" gutterBottom>
          About This Project
        </Typography>

        <Typography variant="body1" gutterBottom className={classes.aboutBody}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </div>

      {/* <LocationList /> */}
    </div>
  );
};

export default withStyles(styles)(App);
