import React, { Fragment } from 'react';
import { Toolbar, CssBaseline, AppBar, Typography, makeStyles } from '@material-ui/core';
import { PermMedia } from '@material-ui/icons';
import ITuneSearch from './components/ITuneSearch';
import { Provider } from 'react-redux';
import store from './store';

const useStyles = makeStyles((theme) => ({
  appBarIcon: {
    marginRight: theme.spacing(2)
  },
  searchGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PermMedia className={classes.appBarIcon} />
            <Typography variant="h6">React iTune Search</Typography>
          </Toolbar>
        </AppBar>
        <ITuneSearch />
      </Fragment>
    </Provider>
  );
}

export default App;
