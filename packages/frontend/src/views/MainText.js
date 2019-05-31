import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CreditList from './CreditList';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(3),
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  creditButton: {
    textAlign: 'center',
    margin: theme.spacing(3, 2),
  },
}));


const MainText = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.section}>
          <Typography variant="h4" component="h2" gutterBottom>
            What is a Galavanting Gnome?
          </Typography>
          <Typography component="p" gutterBottom>
            First off…he has a name, it's Gulliver!
            He's a trackable traveler who tags along on any adventure you'd like to take him on.
            Hand him off to friends to travel or leave him in a location to hitchhike his way to some amazing destinations.
          </Typography>
        </div>

        <div className={classes.section}>
          <Typography variant="h5" component="h3" gutterBottom>
            What does a Galavanting Gnome do?
          </Typography>
          <Typography component="p" gutterBottom>
            It's really up to the adventurer who's picked him up!
            He can ride a bike, backpack, ride a horse, go four wheeling, or even relax on a beach.
            The real fun is following Gulliver on his expedition with everyone.
            As he travels, he tracks his journey at https://galavanting-gnome.surge.sh/ and allows all the fun to be shared on his social media.
          </Typography>
          <Typography component="i">
            NOTE: By picking up the galavanting gnome, you're explicitly agreeing to the tracking of your location as participation of his adventuring.
            If this is not something you want, please leave Gulliver where you find him.
          </Typography>
        </div>

        <div className={classes.section}>
          <Typography variant="h5" component="h3" gutterBottom>
            How does a Galavanting Gnome work?
          </Typography>
          <Typography component="p">
            Gulliver lives in 2019 and is equipped with the capability to connect to 2G networks to identify his location every [amount of time] and send his location online to track his whereabouts.
            With each ping of his travel, a path connector is drawn to give a visual of where he started and where he's gone.
          </Typography>
        </div>

        <div className={classes.section}>
          <Typography variant="h5" component="h3" gutterBottom>
            What do I do if I find the Galavanting Gnome?
          </Typography>
          <Typography component="p">
            Don't panic!
            You've already made the first step by visiting this webpage.
            In the Owner Section, you can identify what exactly is expected of you during your time together, so that you have a better idea of what to expect and how to handle Gulliver.
          </Typography>
        </div>

        <div className={classes.section}>
          <Typography variant="h5" component="h3" gutterBottom>
            Is there etiquette to having a Galavanting Gnome?
          </Typography>
          <Typography component="p" gutterBottom>
            Use the Golden Rule when you find a Gulliver!
            When on vacation, you want to see sites and do fun things, not sit in a trunk or on a shelf.
            The same applies to our short-statured friend.
            It's our goal to see the gnome travel as much as possible!
          </Typography>
          <Typography component="p">
            If you plan on holding Gulliver for more than a few weeks or have damaged him by accident, do not hesitate to reach out to us for support {process.env.REACT_APP_SUPPORT_EMAIL}.
          </Typography>
        </div>

        <div className={classes.section}>
          <Typography variant="h5" component="h3" gutterBottom>
            How do I get a Galavanting Gnome?
          </Typography>
          <Typography component="p">
            Visit https://galavanting-gnome.surge.sh/ and identify where the gnome may be.
            He's probably awaiting his next travel partner, so don't hesitate to pick him up and begin your planning.
          </Typography>
          <Typography component="i">
            NOTE: At this time, if a user holds on to the gnome for too long, he will appear to be ready for pickup at your own residence.
            It's highly discouraged to search for, or leave, Gulliver in residential areas.
          </Typography>
        </div>
      </Paper>

      <Paper className={classes.paper}>
        <div className={classes.section}>
          <Typography variant="h4" component="h3">
            I got ahold of the Galavanting Gnome, what now?
          </Typography>
        </div>

        <div className={classes.section}>
          <Typography variant="h5" component="h3" gutterBottom>
            Fully Charge
          </Typography>
          <Typography component="p">
            Despite his sweet solar panel, he gets tired with all his traveling.
            Ensuring he's ready to go means that all of his antics are continually tracked.
          </Typography>
        </div>

        <div className={classes.section}>
          <Typography variant="h5" component="h3" gutterBottom>
            How do I charge him?
          </Typography>
          <Typography component="p">
            Look for the charging port located [location] and plug him into an outlet using a [charge cord type]
          </Typography>
        </div>

        <div className={classes.section}>
          <Typography variant="h5" component="h3" gutterBottom>
            What if the charger port or solar panel is damaged?
          </Typography>
          <Typography component="p">
            Contact the Gnome Support team at {process.env.REACT_APP_SUPPORT_EMAIL} for us to attempt retrieval of the gnome.
          </Typography>
        </div>

        <div className={classes.section}>
          <Typography variant="h5" component="h3" gutterBottom>
            Explore the world!
          </Typography>
          <Typography component="p">
            The gnome hates sitting around, it drives him a bit crazy.
            We encourage people to take him to brand new places, experience new things and meet new people.
            The whole time he travels he will document your adventure, allowing you to view the travels at https://galavanting-gnome.surge.sh/
          </Typography>
        </div>

        <div className={classes.section}>
          <Typography variant="h5" component="h3" gutterBottom>
            Socialize your Adventure
          </Typography>
          <Typography component="p">
            Why travel without saving the memories?
            Make sure to snap pictures and share your stories to the following outlets:
          </Typography>
          <Typography component="ul" gutterBottom>
              <li>Facebook</li>
              <li><a href="https://www.instagram.com/galavanting_gnome/">Instagram</a></li>
          </Typography>
        </div>

        <div className={classes.section}>
          <Typography variant="h5" component="h3" gutterBottom>
            What should not be done with the Galavanting Gnome?
          </Typography>
          <Typography component="p" gutterBottom>
            Respect Guliver and respect others who are participating in making his travel experiences come true.
            We ask that all components of the trackable gnome are not damaged or vandalized in any form.
            Maintaining general care while traveling is encouraged, and the team may be contacted in the event of accidental damages at {process.env.REACT_APP_SUPPORT_EMAIL}.
          </Typography>

          <Typography component="p">
            The team does not frown upon placing stickers of your travel locations on the gnome, as long as the following conditions are met:
          </Typography>
          <Typography component="ul" gutterBottom>
            <li>No profanity</li>
            <li>No religious or anti-religious symbols</li>
            <li>No political statements</li>
            <li>Do not cover the solar panel</li>
          </Typography>

          <Typography>
            Don't use the tracking of the gnome under malicious intent.
            The tracking feature is to explore the capabilities of implementing the internet into strange things, highlighting the fun that the internet of things can bring to this world.
          </Typography>
        </div>

        <div className={classes.section}>
          <Typography variant="h5" component="h3" gutterBottom>
            The location is calculated wrong. How do I fix it?
          </Typography>
          <Typography component="p">
            First, ensure that you're in an area that receives cellular connection.
            If that doesn't work, make sure the gnome is fully charged.
            Still not tracking right?
            Contact us at {process.env.REACT_APP_SUPPORT_EMAIL} so we may remedy the issue.
          </Typography>
        </div>
      </Paper>

      <CreditList className={classes.creditButton} />
    </Container>
  );
};

export default MainText;
