import React from 'react';
import { connect } from 'react-redux';
import { setSearch, setSubmitting } from '../../redux/reducers/queries-reducer';
import { TextField, Button, IconButton } from '@material-ui/core';
import { Formik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

const Header = (props) => {
  const history = useHistory();

  const routeChange = () => {
    let path = `/`;
    history.push(path);
  };

  return (
    <div className='header'>
      <div className='searchBar'>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={(data, { resetForm }) => {
            props.setSubmitting(true);
            props.setSearch(data.search);
            routeChange();
            props.setSubmitting(false);
            resetForm();
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name='search'
                value={values.search}
                onChange={handleChange}
                size='small'
                color='primary'
                variant='outlined'
                placeholder='Search lyrics'
                style={{
                  backgroundColor: '#F8DCC2',
                  borderRadius: 4,
                }}
              />
              <IconButton
                size='medium'
                color='inherit'
                type='submit'
                aria-label='search'
              >
                <SearchIcon />
              </IconButton>
            </form>
          )}
        </Formik>
      </div>
      <div className='logo'>
        <NavLink to='/'>LyricsHub</NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.queries.searchQuery,
  };
};

export default connect(mapStateToProps, { setSearch, setSubmitting })(Header);
