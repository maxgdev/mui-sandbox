import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabContent: {
    padding: theme.spacing(2)
  }
});

function TabNavigationWithRoutes({ classes }) {
  const [value, setValue] = useState(0);

  const onChange = (e, value) => {
    setValue(value);
    console.log("tab value: ", value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={onChange}>
          <Tab label="Item One" component={Link} to="/" />
          <Tab label="Item Two" component={Link} to="/page2" />
          <Tab label="Item Three" component={Link} to="/page3" />
        </Tabs>
      </AppBar>
      <Route
        exact
        path="/"
        render={() => (
          <Typography component="div" className={classes.tabContent}>
            <p>Item One</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae libero diam</p>
          </Typography>
        )}
      />
      <Route
        exact
        path="/page2"
        render={() => (
          <Typography component="div" className={classes.tabContent}>
            <p>Item Two</p>
            <p>Donec tellus diam, viverra id mi at, vulputate lobortis nisi. Etiam commodo, odio sit amet imperdiet hendrerit, erat leo consequat lorem, sit amet imperdiet ex tortor in ante</p>
          </Typography>
        )}
      />
      <Route
        exact
        path="/page3"
        render={() => (
          <Typography component="div" className={classes.tabContent}>
            <p>Item Three</p>
            <p>In sit amet fringilla nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam accumsan blandit eros et porttitor. Cras vitae tincidunt urna, eget malesuada orci. Integer ornare ac nisl vel faucibus.</p>
          </Typography>
        )}
      />
    </div>
  );
}

export default withStyles(styles)(TabNavigationWithRoutes);
