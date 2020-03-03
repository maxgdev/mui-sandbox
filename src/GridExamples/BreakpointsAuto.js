import React from 'react';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  });

  const BreakpointsAuto = withStyles(styles)(({ classes }) => (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs="auto" sm="auto" md="auto">
          <Paper className={classes.paper}> xs=auto sm=auto md=auto </Paper>
        </Grid>
        <Grid item xs="auto" sm="auto" md="auto">
          <Paper className={classes.paper}> xs=auto sm=auto md=auto </Paper>
        </Grid>
        <Grid item xs="auto" sm="auto" md="auto">
          <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
        </Grid>
        <Grid item xs="auto" sm="auto" md="auto">
          <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
        </Grid>
      </Grid>
    </div>
  ));
  
  export default BreakpointsAuto;