import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GnomeMap from './GnomeMap';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  title: {
    textAlign: 'center',
  },
  about: {
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
        <Grid container justify={'center'}>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom className={classes.title}>
              About This Project
            </Typography>
          </Grid>

          <Grid item sm={9}>
            <Typography variant="body1" gutterBottom className={classes.aboutBody}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);
