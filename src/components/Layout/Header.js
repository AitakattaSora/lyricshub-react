import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../Content/SearchBar';
import { Typography } from '@material-ui/core';

const Header = () => {
  return (
    <div className='header'>
      <SearchBar />
      <Typography variant='h6' component='h1'>
        <NavLink to='/'>LyricsHub</NavLink>
      </Typography>
    </div>
  );
};

export default Header;
