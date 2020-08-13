import React from 'react';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <Typography variant='h6' component='h1'>
        <NavLink to='/'>LyricsHub 2020</NavLink>
      </Typography>
    </footer>
  );
};

export default Footer;
