import React, { Fragment } from 'react';
import { JssProvider, jss } from 'react-jss';

import {
  withStyles,
  createGenerateClassName
} from '@material-ui/styles';
import {
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    margin: theme.spacing(2),
  },
  contained: {
    extend: 'root',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    margin: theme.spacing(2),
  },
  containedPrimary: {
    extend: 'contained',
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
});

const App = ({ children }) => (
  <JssProvider
    jss={jss}
    generateClassName={createGenerateClassName()}
  >
    <MuiThemeProvider theme={createMuiTheme()}>
      {children}
    </MuiThemeProvider>
  </JssProvider>
);

const Buttons = withStyles(styles)(({ classes }) => (
  <Fragment>
    <Button className={classes.root}>My Default Button</Button>
    <Button className={classes.contained} variant="contained">
      My Contained Button
    </Button>
    <Button
      className={classes.containedPrimary}
      variant="contained"
      color="primary"
    >
      My Contained Primary Button
    </Button>
    <Button
      className={classes.containedPrimary}
      variant="contained"
      color="secondary"
    >
      My Contained Secondary Button
    </Button>
  </Fragment>
));

const ExtendingComponentStyles = () => (
  <App>
    <Buttons />
  </App>
);

export default ExtendingComponentStyles;
