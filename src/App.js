import React, { useLayoutEffect } from 'react';
import './App.css';
import SearchResultsPage from './components/Content/SearchResultsPage';
import { Header, Footer } from './components/Layout';
import SongPage from './components/Content/SongPage';
import { Grid } from '@material-ui/core';
import { Route, Switch, useLocation } from 'react-router-dom';

const App = () => {
  // Scroll to top if path changes
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='app-container'>
      <Header />
      <Grid container>
        <Grid className='side' xs={false} sm={2} item></Grid>
        <Grid className='main' xs={12} sm={8} item container>
          <Switch>
            <Route exact path='/' component={SearchResultsPage} />
            <Route exact path='/song/:id?' component={SongPage} />
          </Switch>
        </Grid>
        <Grid className='side' item xs={false} sm={2}></Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default App;
