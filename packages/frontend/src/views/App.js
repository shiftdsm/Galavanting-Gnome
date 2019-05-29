import React from 'react';
import Typography from '@material-ui/core/Typography';
import GnomeMap from './GnomeMap';
import { withStyles } from '@material-ui/core/styles';
// import CreditList from './CreditList';
import MainText from './MainText';

const styles = () => ({
  title: {
    textAlign: 'center',
  },
  about: {
    marginTop: '2.5rem',
    marginBottom: '2.5rem',
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
      <MainText />
      {/* <CreditList /> */}
    </div>
  );
};

export default withStyles(styles)(App);
