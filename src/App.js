import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import { Header, Footer } from './components/Layout';
import SongPage from './components/SongPage';
import { Grid } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div class='app-container'>
      <Header />
      <Grid container>
        <Grid xs={false} sm={2} item></Grid>
        <Grid xs={12} sm={8} item container>
          <Switch>
            <Route exact path='/' component={Content} />
            <Route exact path='/song/:id?' component={SongPage} />
          </Switch>
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default App;
