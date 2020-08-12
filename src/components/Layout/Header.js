import React from 'react';
import { connect } from 'react-redux';
import { setSearch } from '../../redux/reducers/queries-reducer';
import { TextField } from '@material-ui/core';
import { Formik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';

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
          onSubmit={(data) => {
            props.setQuery(data.search);
            routeChange();
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
              {/* <Button
                type='submit'
                style={{
                  marginLeft: 20,
                }}
                variant='contained'
              >
                Search
              </Button> */}
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

const mapDispatchToProps = (dispatch) => {
  return {
    setQuery: (query) => {
      dispatch(setSearch(query));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
