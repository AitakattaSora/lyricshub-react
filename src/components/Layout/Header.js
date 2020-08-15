import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../Content/SearchBar';
import { Typography, AppBar } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position='sticky'>
      <div className='header'>
        <SearchBar />
        <Typography variant='h6' component='h1'>
          <NavLink to='/'>LyricsHub</NavLink>
        </Typography>
      </div>
    </AppBar>
  );
};

export default Header;
